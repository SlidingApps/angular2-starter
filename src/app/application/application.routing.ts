
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PublicComponent } from '../view/public/public.component';
import { AccountComponent } from '../view/account/account.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: PublicComponent },
      { path: 'public', component: PublicComponent},
      { path: 'account', component: AccountComponent }
    ])
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  exports: [
    RouterModule
  ]
})
export class ApplicationRoutingModule { }
