
import { NgModule } from '@angular/core';
import { Logger } from '../../application/shared.module';

import { AutofocusDirective } from './autofocus.directive';

@NgModule({
    declarations: [
        AutofocusDirective
    ],
    exports: [
        AutofocusDirective
    ]
})
export class DirectiveModule {
    constructor() {
        Logger.Info('DirectiveModule', 'done');
    }
}
