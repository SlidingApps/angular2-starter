
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AccountComponentModule } from '../../../component/account/account.module';

import { SharedModule, Logger } from '../../../application/shared.module';
import { SignInComponent } from './sign-in.component';
import { FormComponent } from './form/form.component';

@NgModule({
    imports: [
        SharedModule,
        ReactiveFormsModule,
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
