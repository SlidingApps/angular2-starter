
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { Logger } from '../../foundation/logger';
import { GetStartedModule } from './get-started/get-started.module';
import { ForgotPasswordModule } from './forgot-password/forgot-password.module';
import { SignInModule } from './sign-in/sign-in.module';
import { AccountRouterModule } from './account.router';
import { AccountComponent } from './account.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        Ng2BootstrapModule,
        AccountRouterModule,
        GetStartedModule,
        ForgotPasswordModule,
        SignInModule
    ],
    declarations: [
        AccountComponent
    ]
})
export class AccountModule {
    constructor() {
        Logger.Info('AccountModule', 'done');
    }
}
