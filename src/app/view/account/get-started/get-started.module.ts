
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AccountComponentModule } from '../../../component/account/account-component.module';
import { DirectiveModule } from '../../../component/directive/directive.module';

import { SharedModule, Logger } from '../../../application/shared.module';
import { ServiceModule } from '../../../service/service.module';
import { GetStartedComponent } from './get-started.component';
import { FormComponent } from './form/form.component';

@NgModule({
    imports: [
        SharedModule,
        ReactiveFormsModule,
        AccountComponentModule,
        DirectiveModule,
        ServiceModule
    ],
    declarations: [
        GetStartedComponent,
        FormComponent
    ]
})
export class GetStartedModule {
    constructor() {
        Logger.Info('View:Account:GetStartedModule', 'done');
    }
}
