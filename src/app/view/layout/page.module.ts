
import { NgModule } from '@angular/core';

import { Logger } from '../../foundation/logger';
import { PageComponent } from './page.component';
import { NavigationModule } from './navigation/navigation.module';
import { ContentModule } from './content/content.module';

@NgModule({
    imports: [
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
        Logger.Info('PageModule', 'done');
    }
}
