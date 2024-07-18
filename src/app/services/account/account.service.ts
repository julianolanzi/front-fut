import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { Observable, catchError, map } from 'rxjs';

import { UserSuccess } from '../../models/account/get-user/user.success';
import { BaseService } from "../utils/base.service";

@Injectable({
    providedIn: 'root'
})

export class AccountService extends BaseService {


    constructor(private http: HttpClient, Store: Store) {
        super(Store);
    }
    GetUser(id: string | undefined): Observable<UserSuccess> {
        let response = this.http
            .get(this.Url + '/users/get/' + id, this.ObterAuthHeaderJson())
            .pipe(map(this.extractData), catchError(this.serviceError));
        return response;
    }

}