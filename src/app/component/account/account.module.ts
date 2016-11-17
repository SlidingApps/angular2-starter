
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { Logger } from '../../foundation/logger';

import { OrganizationComponent, IOrganizationModel } from './organization.component';
import { UsernameComponent, IUsernameModel } from './username.component';
import { PasswordComponent, IPasswordModel } from './password.component';
import { ButtonComponent } from './button.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
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

export { AccountComponentModule, IOrganizationModel, IUsernameModel, IPasswordModel }
