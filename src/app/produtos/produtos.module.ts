import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ConsultaProdutosComponent } from './consulta-produtos/consulta-produtos.component';
import { ManterProdutosComponent } from './manter-produtos/manter-produtos.component';
import { TextMaskModule } from 'angular2-text-mask';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    SharedModule,
    CurrencyMaskModule,
    TextMaskModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [

  ],
  declarations: [ConsultaProdutosComponent, ManterProdutosComponent]
})
export class ProdutosModule { }
