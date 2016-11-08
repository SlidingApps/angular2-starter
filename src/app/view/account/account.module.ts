
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { SignInModule } from './sign-in/sign-in.module';
import { AccountRouterModule } from './account.router';
import { AccountComponent } from './account.component';

@NgModule({
    imports: [
        CommonModule,
        Ng2BootstrapModule,
        AccountRouterModule,
        SignInModule
    ],
    declarations: [
        AccountComponent
    ]
})
export class AccountModule { }
