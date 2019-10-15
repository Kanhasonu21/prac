import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  
  {
    path:'getlist',
    component: ListComponent
  },
  
  {
    path:'',
    component:HomeComponent

  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
