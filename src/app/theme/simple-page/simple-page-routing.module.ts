import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimplePageComponent } from './simple-page.component';

const routes: Routes = [
  {
    path: '',
    component: SimplePageComponent,
    data: {
      title: 'Home',
      icon: 'icon-layout-sidebar-left',
      caption: 'sample home page',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimplePageRoutingModule { }
