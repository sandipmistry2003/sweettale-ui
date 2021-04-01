import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterRoutingModule } from './footer-routing.module';
import { SignatureComponent } from './signature/signature.component';


@NgModule({
  declarations: [SignatureComponent],
  imports: [
    CommonModule,
    FooterRoutingModule
  ],
  exports: [
    SignatureComponent
  ]
})
export class FooterModule { }
