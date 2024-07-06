import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { catchError, map, Observable } from 'rxjs';
import { Login } from '../../models/authentication/auth/login';
import { LoginSuccess } from '../../models/authentication/auth/login-sucess';
import { Register } from '../../models/authentication/register/register';
import { BaseService } from '../utils/base.service';

@Injectable()
export class AuthenticationService extends BaseService {

  constructor(private http: HttpClient, Store: Store) {
    super(Store);
  }


  singUp(payload: Register): Observable<any> {
    let response = this.http
      .post(this.Url + '/register', payload, this.ObterHeaderJson())
      .pipe(map(this.extractData), catchError(this.serviceError));
    return response;
  }

  loginUser(loginUser: Login | undefined): Observable<LoginSuccess> {
    let response = this.http
      .post(this.Url + '/auth/', loginUser, this.ObterHeaderJson())
      .pipe(map(this.extractData), catchError(this.serviceError));
    return response;
  }
  refrashToken(token: string | undefined): Observable<LoginSuccess> {
    let response = this.http
      .get(this.Url + '/refresh_token/', this.ObterRefreshToken(token))
      .pipe(map(this.extractData), catchError(this.serviceError));
    return response;
  }

}
