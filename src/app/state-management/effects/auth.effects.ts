import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AlertService } from "../../services/utils/alert.service";

import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { catchError, map, of, switchMap } from "rxjs";
import { AuthenticationService } from "../../services/authentication/authentication.service";
import { LocalStorageService } from "../../services/utils/local-storage.service";
import { authGlobalError } from "../actions/authentication/auth-global-error.actions";
import { AuthMessageEnum } from "../actions/authentication/auth.message.enum";
import { AuthRequest } from "../actions/authentication/auth/auth-request.actions";
import { AuthSuccess } from "../actions/authentication/auth/auth-success.actions";
import { RefreshTokenSuccess } from "../actions/authentication/refresh-token/refresh-token-success.actions";
import { RefreshToken } from "../actions/authentication/refresh-token/refresh-token.actions";


@Injectable({
  providedIn: 'root',
})

export class AuthEffect {
  loginAuth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthMessageEnum.AUTH_RESQUEST),
      switchMap((action: AuthRequest) => {
        return this.AuthService.loginUser(action.payload).pipe(
          map((response) => {

            this.localStorageService.saveToken(response.token);

            this.router.navigate(['/matches']);

            return new AuthSuccess(response);
          }),
          catchError((error) => {
            this.alertService.error(error.error.errors, 'Ops, Aconteceu um erro!');
            return of(new authGlobalError(error));
          })
        );
      })
    )
  );

  RefreshToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthMessageEnum.REFRESH_TOKEN_REQUEST),
      switchMap((action: RefreshToken) => {
        return this.AuthService.refrashToken(action.payload).pipe(
          map((response) => {


            return new RefreshTokenSuccess(response);
          }),
          catchError((error) => {

            const err = error.error.error;
            this.alertService.error(err, 'Ops, Aconteceu um erro!');
            return of(new authGlobalError(error));
          })
        );
      })
    )
  );


  constructor(
    private actions$: Actions,
    private AuthService: AuthenticationService,
    private alertService: AlertService,
    private router: Router,
    private store: Store,
    private localStorageService: LocalStorageService
  ) {

  }

}