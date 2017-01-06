
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs';
import * as crypto from 'crypto-js';

import { ApplicationConfig } from '../../../app/application/shared.module';
import { AccountValidity, IAccountValidity } from './account/account-validity';

@Injectable()
export class AuthorizationService {

    constructor(private $http: Http) { }

    public signIn(userName: string, password: string): Observable<AccountValidity> {

        const credentials: string =  window.btoa(userName + ':' + password);
        const headers = new Headers();
        headers.append('Authorization', 'Basic ' + credentials);
        headers.append('Accept', 'application/hal+json');
        headers.append('Content-Type', 'application/json; charset=utf-8');

        const requestConfiguration: RequestOptionsArgs = {
            headers: headers
        };

        const hash = crypto.SHA256(password);
        console.log('hash', hash);

        return this.$http
            .get(`${ApplicationConfig.AUTHORIZATION_HOST_URL}/${ApplicationConfig.AUTHORIZATION_API_PATH}`, requestConfiguration)
            .map(r => r.json() as IAccountValidity)
            .map(r => new AccountValidity(r));
    }
}
