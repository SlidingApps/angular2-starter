
import { NgModule } from '@angular/core';

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
export class PageModule { }
