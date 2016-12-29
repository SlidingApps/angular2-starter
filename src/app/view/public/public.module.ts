
import { NgModule } from '@angular/core';

import { SharedModule, Logger } from '../../../app/application/shared.module';

import { PublicRouterModule } from './public.routing';
import { PublicComponent } from './public.component';

@NgModule({
    imports: [
        SharedModule,
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
        Logger.Info('View:Public:PublicModule', 'done');
    }
}
