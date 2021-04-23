import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FarmacoFormComponent } from './farmaco-form/farmaco-form.component';
import { FarmacosListComponent } from './farmacos-list/farmacos-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'farmaco/all'},
  { path: 'farmaco/all', component: FarmacosListComponent},
  { path: 'farmaco/add', component: FarmacoFormComponent},
  { path: 'farmaco/edit/:name', component: FarmacoFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
