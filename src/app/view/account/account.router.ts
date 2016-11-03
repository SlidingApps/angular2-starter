
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'account',
        component: AccountComponent,
        children: [
          { path: '', redirectTo: 'signin', pathMatch: 'full' },
          { path: 'signin', component: SignInComponent }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AccountRouterModule { }
