import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { createNumberMask } from 'text-mask-addons/dist/textMaskAddons';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-manter-produtos',
  templateUrl: './manter-produtos.component.html',
  styleUrls: ['./manter-produtos.component.scss']
})

export class ManterProdutosComponent implements OnInit {

  myForm: FormGroup;
  unidadeMedida = [
    { value: 'lt', label: 'Litro' },
    { value: 'kg', label: 'Quilograma' },
    { value: 'un', label: 'Unidade' },
  ];
  hasError = '';
  idProduto = -1;

  constructor(private route: ActivatedRoute, private router: Router) {

    const nome = new FormControl('', [Validators.required, Validators.max(50)]);
    const unidadeMedida = new FormControl('lt', Validators.required);
    const quantidade = new FormControl('');
    const preco = new FormControl('0', Validators.required);
    const produtoPerecivel = new FormControl(true, [Validators.required]);
    const dataValidade = new FormControl('', [Validators.required]);
    const dataFabricacao = new FormControl('');

    this.myForm = new FormGroup({
      nome: nome,
      unidadeMedida: unidadeMedida,
      quantidade: quantidade,
      preco: preco,
      produtoPerecivel: produtoPerecivel,
      dataValidade: dataValidade,
      dataFabricacao: dataFabricacao
    });
  }

  ngOnInit() {
    this.route.url.subscribe(r => {
      this.idProduto = -1;

      this.getRouteData();

      if (this.idProduto != -1) {
        let produtos = JSON.parse(localStorage.getItem('meusProdutos'));

        let prod = produtos[this.idProduto]

        this.myForm.controls.nome.setValue(prod.nome)
        this.myForm.controls.unidadeMedida.setValue(prod.unidadeMedida)
        this.myForm.controls.quantidade.setValue(prod.quantidade)
        this.myForm.controls.preco.setValue(prod.preco)
        this.myForm.controls.produtoPerecivel.setValue(prod.produtoPerecivel)
        this.myForm.controls.dataValidade.setValue(prod.dataValidade)
        this.myForm.controls.dataFabricacao.setValue(prod.dataFabricacao)
      }
    })
  }

  getRouteData() {
    this.route.data
      .subscribe(data => {
        if (data.editar)
          this.route.params.subscribe((param) => { this.idProduto = param.id });
      });
  }

  public maskUsAmountDecimal = createNumberMask({
    prefix: '',
    suffix: ' lt',
    allowDecimal: false
  });

  changeUnidadeMedida() {

    if (this.myForm.controls.unidadeMedida.value == 'lt') {
      this.maskUsAmountDecimal = createNumberMask({
        prefix: '',
        suffix: ' lt',
        allowDecimal: true,
        thousands: '.',
        decimal: ','
      });
    }

    if (this.myForm.controls.unidadeMedida.value == 'kg') {
      this.maskUsAmountDecimal = createNumberMask({
        prefix: '',
        suffix: ' kg',
        allowDecimal: true,
        thousands: '.',
        decimal: ','
      });
    }

    if (this.myForm.controls.unidadeMedida.value == 'un') {
      this.maskUsAmountDecimal = createNumberMask({
        prefix: '',
        suffix: ' un',
        allowDecimal: false,
        thousands: '.',
        decimal: ','
      });
    }
  }

  salvar() {

    this.hasError = '';

    if (this.myForm.controls.produtoPerecivel.value == true && this.myForm.controls.dataFabricacao.value == '') {
      this.hasError = 'Se o produto dor perecível você deve informar a data de fabricação!'
    }

    if (this.myForm.controls.dataValidade.value != '' && this.myForm.controls.dataFabricacao.value != '') {
      if (this.myForm.controls.dataValidade.value < this.myForm.controls.dataFabricacao.value) {
        this.hasError = 'A data de validade deve ser maior que a data de Fabricação!';
      }
    }

    if (this.hasError == '') {
      let produtos = [];

      if (JSON.parse(localStorage.getItem('meusProdutos')) != null)
        produtos = JSON.parse(localStorage.getItem('meusProdutos'));

      produtos.push(this.myForm.value)

      if (this.idProduto != -1) {
        produtos.splice(this.idProduto, 1);
      }

      localStorage.setItem('meusProdutos', JSON.stringify(produtos));

      Swal("Sucesso", "Salvo com sucesso!", "success")
        .then(e => {
          // Salvou
        })

      this.router.navigate(['produtos', 'cadastro']);
    }
  }
}