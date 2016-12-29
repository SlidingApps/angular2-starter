
import { NgModule } from '@angular/core';

import { SharedModule, Logger } from '../../application/shared.module';
import { PageComponent } from './page.component';
import { NavigationModule } from './navigation/navigation.module';
import { ContentModule } from './content/content.module';

@NgModule({
    imports: [
        SharedModule,
        NavigationModule,
        ContentModule
    ],
    declarations: [
        PageComponent
    ],
    exports: [
        PageComponent
    ]
})
export class PageModule {
    constructor() {
        Logger.Info('View:Layout:PageModule', 'done');
    }
}
