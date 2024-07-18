import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Subscription, throwError } from 'rxjs';
import { environment } from '../../environments/environment';



export abstract class BaseService {
  public CookieToken: string | undefined;
  private subscriptions: Subscription = new Subscription();

  constructor(private store: Store) {
    this.store = store;
    // this.loadUser();
  }

  // protected UrlServiceV1: string = 'http://localhost:3000';

  protected Url: string = environment.Url;


  protected ObterHeaderJson() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  protected SendAuthHeaderJson(token: string) {
    const send = 'Bearer ' + token;
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: send,
      }),
    };
  }

  protected ObterAuthHeaderJson() {
    return {

      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer `,
      }),
    };
  }
  // protected ObterAuthHeaderUploadJson() {
  //   return {
  //     headers: new HttpHeaders({
  //       Authorization: `Bearer ${this.user.token}`,
  //     }),
  //   };
  // }
  protected ObterRefreshToken(token: string | undefined) {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
  }

  protected extractData(response: any) {
    return response || {};
  }

  protected serviceError(response: Response | any) {

    let customError: { error: string };
    if (response instanceof HttpErrorResponse) {

      if (response.statusText === 'Unknown Error') {
        response.error.errors = 'Ocorreu um errro desconhecido';
      }

      if (response.status === 0 || response.status == 500) {
        response.error.errors = 'Encotramos uma instabilidade,nossa equipe já foi avisada, tente novamente mais tarde';
      }

    }




    return throwError(response);
  }

  // public loadUser() {
  //   const subscription = this.store
  //     .pipe(select(AuthSelector))
  //     .subscribe((user: any) => {
  //       this.user = user;
  //     });

  //   this.subscriptions.add(subscription);
  // }


}
