
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { AccountComponentModule } from '../../../component/account/account.module';

import { Logger } from '../../../foundation/logger';
import { SignInComponent } from './sign-in.component';
import { FormComponent } from './form/form.component';

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
        FormComponent
    ]
})
export class SignInModule {
    constructor() {
        Logger.Info('SignInModule', 'done');
    }
}
