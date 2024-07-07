import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { RefreshToken } from "../state-management/actions/authentication/refresh-token/refresh-token.actions";
import { GlobalState } from "../state-management/states/global.state";
import { LocalStorageService } from './../services/utils/local-storage.service';


@Injectable({
  providedIn: 'root',
})
export class AuthGaurd implements CanActivate {

  constructor(private router: Router, private store: Store<GlobalState>, private LocalStorageService: LocalStorageService) {


  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (this.LocalStorageService.isTokenValid()) {

      const token = this.LocalStorageService.getToken() as string;
      this.store.dispatch(new RefreshToken(token));


      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }

  }


}