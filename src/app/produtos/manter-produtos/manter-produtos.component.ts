import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IOption } from 'ng-select';
import { CustomValidators } from 'ng2-validation';


@Component({
  selector: 'app-manter-produtos',
  templateUrl: './manter-produtos.component.html',
  styleUrls: ['./manter-produtos.component.scss']
})

export class ManterProdutosComponent implements OnInit {

  public maskDate = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  val = '';
  myForm: FormGroup;
  //unidadeMedida =
  unidadeMedida = [
    { value: 'lt', label: 'Litro' },
    { value: 'kg', label: 'Quilograma' },
    { value: 'un', label: 'Unidade' },
  ];
  selectedOption = 'lt';
  teste: boolean = true;

  constructor() {

    const nome = new FormControl('', [Validators.required, Validators.max(50)]);
    const unidadeMedida = new FormControl('lt', Validators.required);
    const quantidade = new FormControl('');
    const preco = new FormControl('', Validators.required);
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

  }

  salvar() {

    let produtos = [];

    console.log(this.myForm.value)

    produtos = JSON.parse(localStorage.getItem('aa'));

    let produto = this.myForm.value;

    console.log(produto)

    produtos.push(JSON.stringify(produto))

    localStorage.setItem('aa', JSON.stringify(produtos));

    let gg = JSON.parse(localStorage.getItem('aa'));

    console.log(gg);
  }

}

/*import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

const now = new Date();

@Component({
  selector: 'app-manter-produtos',
  templateUrl: './manter-produtos.component.html',
  styleUrls: ['./manter-produtos.component.scss']
})

export class ManterProdutosComponent implements OnInit {

  public maskDate = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  val = '';
  myForm: FormGroup;

  constructor() {

    const name = new FormControl('', Validators.required);
    const password = new FormControl('', Validators.required);
    const gender = new FormControl('', Validators.required);
    const email = new FormControl('', [Validators.required, Validators.email]);
    const rpassword = new FormControl('', [Validators.required, CustomValidators.equalTo(password)]);

    this.myForm = new FormGroup({
      name: name,
      email: email,
      password: password,
      rpassword: rpassword,
      gender: gender
    });
  }

  ngOnInit() {

  }

  salvar() {

    let produtos = JSON.parse(localStorage.getItem('teste'));

    produtos.push(this.myForm.value)

    localStorage.setItem('teste', JSON.stringify(produtos));

    let gg = JSON.parse(localStorage.getItem('teste'));

    console.log(gg);
  }

}
*/