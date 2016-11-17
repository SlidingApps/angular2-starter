
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { AccountComponentModule } from '../../../component/account/account.module';

import { Logger } from '../../../foundation/logger';
import { SignInComponent } from './sign-in.component';
import { FormComponent } from './form/form.component';
import { UsernameComponent } from './form/username.component';
import { PasswordComponent } from './form/password.component';
import { ButtonComponent } from './form/button.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        Ng2BootstrapModule,
        AccountComponentModule
    ],
    declarations: [
        SignInComponent,
        FormComponent,
        UsernameComponent,
        PasswordComponent,
        ButtonComponent
    ]
})
export class SignInModule {
    constructor() {
        Logger.Info('SignInModule', 'done');
    }
}
