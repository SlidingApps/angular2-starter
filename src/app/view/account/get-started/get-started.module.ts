
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { Logger } from '../../../foundation/logger';
import { GetStartedComponent } from './get-started.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        Ng2BootstrapModule,
    ],
    declarations: [
        GetStartedComponent
    ]
})
export class GetStartedModule {
    constructor() {
        Logger.Info('GetStartedModule', 'done');
    }
}
