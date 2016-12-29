
import { NgModule } from '@angular/core';

import { SharedModule, Logger } from '../../../application/shared.module';
import { ContentComponent } from './content.component';

@NgModule({
    imports: [
        SharedModule
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
        Logger.Info('View:Layout:ContentModule', 'done');
    }
}
