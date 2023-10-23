import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAcomodacoesComponent } from './cadastro-acomodacoes.component';

describe('CadastroAcomodacoesComponent', () => {
  let component: CadastroAcomodacoesComponent;
  let fixture: ComponentFixture<CadastroAcomodacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroAcomodacoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroAcomodacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
