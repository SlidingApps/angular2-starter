
import { NgModule } from '@angular/core';
import { Logger } from '../../../app/application/shared.module';

import { ConfirmModule } from './confirm/confirm.module';

@NgModule({
    imports: [
        ConfirmModule
    ],
    exports: [
        ConfirmModule
    ]
})
export class TenantModule {
    constructor() {
        Logger.Info('State:TenantModule', 'done');
    }
}
