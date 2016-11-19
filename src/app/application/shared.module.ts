
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { TranslateModule, TranslateService } from 'ng2-translate';

import { Logger } from '../foundation/logger';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        Ng2BootstrapModule,
        TranslateModule
    ],
    providers: [
        TranslateService
    ],
    exports: [
        CommonModule,
        RouterModule,
        Ng2BootstrapModule,
        TranslateModule
    ]
})
class SharedModule {
    constructor() {
        Logger.Info('SharedModule', 'done');
    }
}

export { SharedModule, TranslateService, Logger }
