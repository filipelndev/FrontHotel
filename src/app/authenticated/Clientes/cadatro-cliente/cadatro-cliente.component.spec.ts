import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadatroClienteComponent } from './cadatro-cliente.component';

describe('CadatroClienteComponent', () => {
  let component: CadatroClienteComponent;
  let fixture: ComponentFixture<CadatroClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadatroClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadatroClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
