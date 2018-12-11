import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterProdutosComponent } from './manter-produtos.component';

describe('ManterProdutosComponent', () => {
  let component: ManterProdutosComponent;
  let fixture: ComponentFixture<ManterProdutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManterProdutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManterProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
