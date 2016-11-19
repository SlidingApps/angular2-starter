
import { NgModule } from '@angular/core';

import { SharedModule, Logger } from '../../../application/shared.module';
import { NavigationComponent } from './navigation.component';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        NavigationComponent
    ],
    exports: [
        NavigationComponent
    ]
})
export class NavigationModule {
    constructor() {
        Logger.Info('NavigationModule', 'done');
    }
}
