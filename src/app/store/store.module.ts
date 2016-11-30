
import { NgModule } from '@angular/core';
import { Logger } from '../../app/application/shared.module';

import { AccountModule } from './account/account.module';

@NgModule({
    imports: [
        AccountModule
    ],
    exports: [
        AccountModule
    ]
})
export class StoreModule {
    constructor() {
        Logger.Info('StoreModule', 'done');
    }
}
