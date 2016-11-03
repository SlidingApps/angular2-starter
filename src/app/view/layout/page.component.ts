
import { Component } from '@angular/core';

@Component({
  selector: 'sa-layout-page',
  template: `
    <!-- PAGE: BEGIN -->
    <sa-layout-navigation></sa-layout-navigation>
    <sa-layout-content></sa-layout-content>
    <!-- PAGE: END -->
    `
})
export class PageComponent { }
