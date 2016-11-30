
import { NgModule } from '@angular/core';
import { Logger } from '../../../app/application/shared.module';

import { GetStartedModule } from './get-started/get-started.module';

@NgModule({
    imports: [
        GetStartedModule
    ],
    exports: [
        GetStartedModule
    ]
})
export class AccountModule {
    constructor() {
        Logger.Info('AccountModule', 'done');
    }
}
