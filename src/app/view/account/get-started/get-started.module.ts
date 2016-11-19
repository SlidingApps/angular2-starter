
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AccountComponentModule } from '../../../component/account/account.module';

import { SharedModule, Logger } from '../../../application/shared.module';
import { GetStartedComponent } from './get-started.component';
import { FormComponent } from './form/form.component';

@NgModule({
    imports: [
        SharedModule,
        ReactiveFormsModule,
        AccountComponentModule
    ],
    declarations: [
        GetStartedComponent,
        FormComponent
    ]
})
export class GetStartedModule {
    constructor() {
        Logger.Info('GetStartedModule', 'done');
    }
}
