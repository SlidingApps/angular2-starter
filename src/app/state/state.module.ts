
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { Logger } from '../../app/application/shared.module';

import { AccountModule } from './account/account.module';
import { TenantModule } from './tenant/tenant.module';

import * as Validation from './validation';
import * as AccountGetStartedAction from './account/get-started/get-started.action';
import * as AccountGetStarted from './account/get-started/get-started.reducer';

import * as AccountSignInAction from './account/sign-in/sign-in.action';
import * as AccountSignIn from './account/sign-in/sign-in.reducer';

import * as TenantConfirmAction from './tenant/confirm/confirm.action';
import * as TenantConfirm from './tenant/confirm/confirm.reducer';

interface State {
    AccountGetStarted: AccountGetStarted.IState;
    AccountSignIn: AccountSignIn.IState;
    TenantConfirm: TenantConfirm.IState;
}

@NgModule({
    imports: [
        StoreModule.provideStore({
            AccountGetStarted: AccountGetStarted.reducer,
            AccountSignIn: AccountSignIn.reducer,
            TenantConfirm: TenantConfirm.reducer
        }),
        AccountModule,
        TenantModule
    ],
    exports: [
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
export { AccountGetStarted, AccountGetStartedAction, AccountSignIn, AccountSignInAction, TenantConfirm, TenantConfirmAction }
