import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadatroPessoaComponent } from './cadatro-pessoa.component';

describe('CadatroPessoaComponent', () => {
  let component: CadatroPessoaComponent;
  let fixture: ComponentFixture<CadatroPessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadatroPessoaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadatroPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
