
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TenantComponent } from './tenant.component';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'tenant',
                component: TenantComponent,
                children: [
                    {path: '', redirectTo: 'signin', pathMatch: 'full'},
                    {path: 'confirmation', component: ConfirmComponent}
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class TenantRouterModule { }
