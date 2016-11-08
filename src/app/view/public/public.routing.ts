
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PublicComponent } from './public.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: 'public', component: PublicComponent}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class PublicRouterModule { }
