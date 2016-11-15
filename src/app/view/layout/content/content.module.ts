
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Logger } from '../../../foundation/logger';
import { ContentComponent } from './content.component';

@NgModule({
    imports: [
        RouterModule
    ],
    declarations: [
        ContentComponent
    ],
    exports: [
        ContentComponent
    ]
})
export class ContentModule {
    constructor() {
        Logger.Info('ContentModule', 'done');
    }
}
