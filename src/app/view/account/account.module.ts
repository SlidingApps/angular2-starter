
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { AccountRouterModule } from './account.router';
import { AccountComponent } from './account.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  imports: [
    CommonModule,
    Ng2BootstrapModule,
    AccountRouterModule
  ],
  declarations: [
    AccountComponent,
    SignInComponent
  ]
})
export class AccountModule { }
