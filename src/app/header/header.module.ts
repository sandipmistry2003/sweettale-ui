import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { MainHeadComponent } from './main-head/main-head.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [MainHeadComponent],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    NgbModule
  ],
  exports: [
    MainHeadComponent,
  ]
})
export class HeaderModule { }
