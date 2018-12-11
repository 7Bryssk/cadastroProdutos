import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ConsultaProdutosComponent } from './consulta-produtos/consulta-produtos.component';
import { ManterProdutosComponent } from './manter-produtos/manter-produtos.component';

@NgModule({
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    SharedModule
  ],
  providers: [

  ],
  declarations: [ConsultaProdutosComponent, ManterProdutosComponent]
})
export class ProdutosModule { }
