
import { Component } from '@angular/core';

@Component({
  selector: 'sa-public-view',
  template: `
    <!-- PUBLIC: BEGIN -->
    <div>PUBLIC VIEW</div>
    <router-outlet></router-outlet>
    <!-- PUBLIC: END -->
    `
})
export class PublicComponent {
}
