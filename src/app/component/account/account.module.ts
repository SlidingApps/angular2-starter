
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule, Logger } from '../../application/shared.module';

import { DirectiveModule } from '../directive/directive.module';
import { TenantComponent, ITenantModel } from './tenant.component';
import { UsernameComponent, IUsernameModel } from './username.component';
import { PasswordComponent, IPasswordModel, IPasswordConfirmationModel } from './password.component';
import { ButtonComponent } from './button.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        DirectiveModule
    ],
    declarations: [
        TenantComponent,
        UsernameComponent,
        PasswordComponent,
        ButtonComponent
    ],
    exports: [
        TenantComponent,
        UsernameComponent,
        PasswordComponent,
        ButtonComponent
    ]
})
class AccountComponentModule {
    constructor() {
        Logger.Info('AccountComponentModule', 'done');
    }
}

export { AccountComponentModule, ITenantModel, IUsernameModel, IPasswordModel, IPasswordConfirmationModel }
