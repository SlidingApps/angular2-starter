
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule, Logger } from '../../application/shared.module';

import { DirectiveModule } from '../directive/directive.module';
import { OrganizationComponent, IOrganizationModel } from './organization.component';
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
        OrganizationComponent,
        UsernameComponent,
        PasswordComponent,
        ButtonComponent
    ],
    exports: [
        OrganizationComponent,
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

export { AccountComponentModule, IOrganizationModel, IUsernameModel, IPasswordModel, IPasswordConfirmationModel }
