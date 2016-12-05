
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { Logger } from '../../app/application/shared.module';

import { IStateError } from './account/state-error';
import { AccountModule } from './account/account.module';

import * as GetStartedAction from './account/get-started/get-started.action';
import * as GetStarted from './account/get-started/get-started.reducer';

import * as SignIn from './account/sign-in/sign-in.reducer';

interface State {
    GetStarted: GetStarted.IState;
    SignIn: SignIn.IState;
}

@NgModule({
    imports: [
        StoreModule.provideStore({
            GetStarted: GetStarted.reducer,
            SignIn: SignIn.reducer
        }),
        AccountModule
    ],
    exports: [
        AccountModule
    ]
})
class StateModule {
    constructor() {
        Logger.Info('StateModule', 'done');
    }
}

export { StateModule, State, IStateError, GetStarted, GetStartedAction, SignIn }
