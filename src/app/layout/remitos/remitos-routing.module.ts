import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RemitosComponent } from './remitos.component';

const routes: Routes = [

  {
    path: '',
    component: RemitosComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemitosRoutingModule { }
