import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemitosRoutingModule } from './remitos-routing.module';
import { RemitosComponent } from './remitos.component';

@NgModule({
  imports: [
    CommonModule,
    RemitosRoutingModule
  ],
  declarations: [RemitosComponent]
})
export class RemitosModule { }

