
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { Logger } from '../../foundation/logger';
import { SignInModule } from './sign-in/sign-in.module';
import { AccountRouterModule } from './account.router';
import { AccountComponent } from './account.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        Ng2BootstrapModule,
        AccountRouterModule,
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
