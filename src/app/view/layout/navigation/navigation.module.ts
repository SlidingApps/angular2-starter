
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Logger } from '../../../foundation/logger';
import { NavigationComponent } from './navigation.component';

@NgModule({
    imports: [
        RouterModule
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
