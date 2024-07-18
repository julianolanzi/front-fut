import { Inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";

import { AccountGlobalError } from "../actions/account/account-global-error.action";
import { AccountMessageEnum } from "../actions/account/account.message.enum";

import { AccountService } from "../../services/account/account.service";
import { AlertService } from "../../services/utils/alert.service";
import { GetUserRequestAction } from "../actions/account/get-user/get-user-request.actions";
import { GetUserSuccessAction } from "../actions/account/get-user/get-user-success.actions";


@Injectable({
    providedIn: 'root',
})


export class AccountEffect {
    loadadUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AccountMessageEnum.GET_INFO_REQUEST),

            exhaustMap((action: GetUserRequestAction) => {
                return this.accountService.GetUser(action.payload).pipe(
                    map((response) => {

                        return new GetUserSuccessAction(response);
                    }),
                    catchError((error) => {

                        const err = error.error.error;
                        this.alertService.error(err, 'Ops alguma coisa nao deu certo');
                        return of(new AccountGlobalError(error));
                    })
                );
            })
        )
    );











    constructor(
        private actions$: Actions,
        @Inject(AccountService) private accountService: AccountService,
        private alertService: AlertService,
    ) { }
}