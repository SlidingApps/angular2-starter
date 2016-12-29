
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AccountComponentModule } from '../../../component/account/account-component.module';

import { SharedModule, Logger } from '../../../application/shared.module';
import { ForgotPasswordComponent } from './forgot-password.component';
import { FormComponent } from './form/form.component';

@NgModule({
    imports: [
        SharedModule,
        ReactiveFormsModule,
        AccountComponentModule
    ],
    declarations: [
        ForgotPasswordComponent,
        FormComponent
    ]
})
export class ForgotPasswordModule {
    constructor() {
        Logger.Info('View:Account:ForgotPasswordModule', 'done');
    }
}
