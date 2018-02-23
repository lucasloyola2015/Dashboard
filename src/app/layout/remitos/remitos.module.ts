import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemitosRoutingModule } from './remitos-routing.module';
import { RemitosComponent } from './remitos.component';
import { AddRemitosComponent } from './add-remitos/add-remitos.component';
import { TablaRemitosComponent } from './tabla-remitos/tabla-remitos.component';

@NgModule({
  imports: [
    CommonModule,
    RemitosRoutingModule
  ],
  declarations: [RemitosComponent, AddRemitosComponent, TablaRemitosComponent]
})
export class RemitosModule { }

