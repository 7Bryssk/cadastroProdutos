import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-consulta-produtos',
  templateUrl: './consulta-produtos.component.html',
  styleUrls: ['./consulta-produtos.component.scss']
})
export class ConsultaProdutosComponent implements OnInit {

  produtos = [];
  temProdutos = false;

  cabecalhos: any[] = [
    { label: 'Nome' },
    { label: 'Unidade de Medida' },
    { label: 'Preço' },
    { label: 'Data de Validade' },
    { label: 'Editar' }
  ];

  constructor() {
    this.produtos = JSON.parse(localStorage.getItem('meusProdutos'));
    if (this.produtos != null) {
      if (this.produtos.length != 0)
        this.temProdutos = true;
    }
  }

  ngOnInit() {
  }

  excluirProduto(index) {

    this.produtos.splice(index, 1);
    localStorage.setItem('meusProdutos', JSON.stringify(this.produtos));

    this.produtos = JSON.parse(localStorage.getItem('meusProdutos'));

    if (this.produtos != null && this.produtos.length != 0) {
      this.temProdutos = true;
    } else {
      this.temProdutos = false;
    }

    Swal("Sucesso", "Excluído com sucesso!", "success")
      .then(e => {
        // Salvou
      })

  }

}
