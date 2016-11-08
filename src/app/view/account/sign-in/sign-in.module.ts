
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { SignInComponent } from './sign-in.component';
import { FormComponent } from './form/form.component';
import { UsernameComponent } from './username/username.component';
import { PasswordComponent } from './password/password.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
    imports: [
        CommonModule,
        Ng2BootstrapModule,
    ],
    declarations: [
        SignInComponent,
        FormComponent,
        UsernameComponent,
        PasswordComponent,
        ButtonComponent
    ]
})
export class SignInModule { }
