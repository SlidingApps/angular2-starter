
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PublicComponent } from '../view/public/public.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', component: PublicComponent}
        ])
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
    exports: [
        RouterModule
    ]
})
export class ApplicationRoutingModule { }
