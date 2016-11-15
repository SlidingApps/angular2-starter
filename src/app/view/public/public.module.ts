
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { Logger } from '../../foundation/logger';
import { PublicRouterModule } from './public.routing';
import { PublicComponent } from './public.component';

@NgModule({
    imports: [
        CommonModule,
        Ng2BootstrapModule,
        PublicRouterModule
    ],
    declarations: [
        PublicComponent
    ],
    exports: [
        PublicComponent
    ]
})
export class PublicModule {
    constructor() {
        Logger.Info('PublicModule', 'done');
    }
}
