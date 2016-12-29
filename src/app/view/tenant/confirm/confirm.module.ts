
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule, Logger } from '../../../application/shared.module';
import { ConfirmComponent } from './confirm.component';

@NgModule({
    imports: [
        SharedModule,
        ReactiveFormsModule
    ],
    declarations: [
        ConfirmComponent
    ]
})
export class ConfirmModule {
    constructor() {
        Logger.Info('View:Tenant:ConfirmModule', 'done');
    }
}
