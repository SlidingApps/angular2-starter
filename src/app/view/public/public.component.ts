
import { Component } from '@angular/core';

@Component({
    selector: 'sa-public-view',
    template: `
    <!-- PUBLIC: BEGIN -->
    <div class="container-fluid">
      <div class="row">
  
        <div class="col-md-6 col-md-offset-3">
            <h1 style="text-align: center;">Welcome to TASKRUNNER.IO</h1>
            <div style="text-align:center;">
                <a routerLink="/account/getstarted" class="btn btn-primary">Get started</a>
            </div>
        </div>        
          
      </div>
    </div>
    <!-- PUBLIC: END -->
    `
})
export class PublicComponent { }
