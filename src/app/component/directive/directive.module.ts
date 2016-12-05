
import { NgModule } from '@angular/core';
import { Logger } from '../../application/shared.module';

import { AutoSelectDirective } from './auto-select.directive';

@NgModule({
    declarations: [
        AutoSelectDirective
    ],
    exports: [
        AutoSelectDirective
    ]
})
export class DirectiveModule {
    constructor() {
        Logger.Info('DirectiveModule', 'done');
    }
}
