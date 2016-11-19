
import { NgModule } from '@angular/core';
import { Logger } from '../../application/shared.module';

import { AccountRouterModule } from './account.router';
import { AccountComponent } from './account.component';
import { GetStartedModule } from './get-started/get-started.module';
import { ForgotPasswordModule } from './forgot-password/forgot-password.module';
import { SignInModule } from './sign-in/sign-in.module';

@NgModule({
    imports: [
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
