
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { PublicComponent } from './public.component';

@NgModule({
  imports: [
    CommonModule,
    Ng2BootstrapModule
  ],
  declarations: [
    PublicComponent
  ]
})
export class PublicModule { }
