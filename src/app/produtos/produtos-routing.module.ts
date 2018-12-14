import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaProdutosComponent } from './consulta-produtos/consulta-produtos.component';
import { ManterProdutosComponent } from './manter-produtos/manter-produtos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'consulta'
  },
  {
    path: 'consulta',
    children: [
      {
        path: '', component: ConsultaProdutosComponent,
        data: {
          title: 'Consultar Produtos',
          icon: 'icon-layout-sidebar-left',
          caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
          status: true
        }
      },
      {
        path: 'consultar', component: ConsultaProdutosComponent,
        data: {
          title: 'Consultar Produtos',
          icon: 'icon-layout-sidebar-left',
          caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
          status: true
        }
      }
    ]
  },
  {
    path: 'cadastro',
    children: [
      {
        path: '', component: ManterProdutosComponent,
        data: {
          title: 'Cadastrar Produto',
          icon: 'icon-layout-sidebar-left',
          caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
          status: true
        }
      },
      {
        path: ':id', component: ManterProdutosComponent,
        data: {
          title: 'Editar Produto',
          icon: 'icon-layout-sidebar-left',
          caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
          status: true,
          editar: true
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
