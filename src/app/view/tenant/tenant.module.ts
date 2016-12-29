
import { NgModule } from '@angular/core';
import { Logger } from '../../application/shared.module';

import { TenantRouterModule } from './tenant.router';
import { TenantComponent } from './tenant.component';
import { ConfirmModule } from './confirm/confirm.module';

@NgModule({
    imports: [
        TenantRouterModule,
        ConfirmModule
    ],
    declarations: [
        TenantComponent
    ]
})
export class TenantModule {
    constructor() {
        Logger.Info('View:Tenant:TenantModule', 'done');
    }
}
