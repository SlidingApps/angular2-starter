
import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
    selector: 'sa-public-view',
    template: `
    <!-- PUBLIC: BEGIN -->
    <div class="container-fluid">
      <div class="row">
  
        <div class="col-md-6 col-md-offset-3">
            <h1 style="text-align: center;">{{ 'PUBLIC.WELCOME' | translate }}</h1>
            <div style="text-align:center;">
                <a routerLink="/account/getstarted" class="btn btn-primary">Get started</a>
            </div>
        </div>        
          
      </div>
    </div>
    <!-- PUBLIC: END -->
    `
})
export class PublicComponent {
    constructor(translate: TranslateService) {

    }
}
