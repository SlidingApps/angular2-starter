
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { Logger } from '../../app/application/shared.module';

import { AuthenticationModule } from './authentication/authentication.module';
import { AccountModule } from './account/account.module';
import { TenantModule } from './tenant/tenant.module';

import * as Validation from './validation';
import * as Authentication from './authentication/authentication.reducer';
import * as AuthenticationModel from './authentication/authentication.model';
import * as AuthenticationAction from './authentication/authentication.action';

import * as AccountGetStarted from './account/get-started/get-started.reducer';
import * as AccountGetStartedAction from './account/get-started/get-started.action';

import * as AccountSignIn from './account/sign-in/sign-in.reducer';
import * as AccountSignInAction from './account/sign-in/sign-in.action';

import * as TenantConfirm from './tenant/confirm/confirm.reducer';
import * as TenantConfirmAction from './tenant/confirm/confirm.action';

interface State {
    Authentication: AuthenticationModel.IState;
    AccountGetStarted: AccountGetStarted.IState;
    AccountSignIn: AccountSignIn.IState;
    TenantConfirm: TenantConfirm.IState;
}

@NgModule({
    imports: [
        StoreModule.provideStore({
            Authentication: Authentication.reducer,
            AccountGetStarted: AccountGetStarted.reducer,
            AccountSignIn: AccountSignIn.reducer,
            TenantConfirm: TenantConfirm.reducer
        }),
        AuthenticationModule,
        AccountModule,
        TenantModule
    ],
    exports: [
        AuthenticationModule,
        AccountModule,
        TenantModule
    ]
})
class StateModule {
    constructor() {
        Logger.Info('State:StateModule', 'done');
    }
}

export { StateModule, State}
export { Validation }
export { Authentication, AuthenticationAction, AuthenticationModel }
export { AccountGetStarted, AccountGetStartedAction, AccountSignIn, AccountSignInAction }
export { TenantConfirm, TenantConfirmAction }
