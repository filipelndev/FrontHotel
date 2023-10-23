import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcuraClienteComponent } from './procura-cliente.component';

describe('ProcuraClienteComponent', () => {
  let component: ProcuraClienteComponent;
  let fixture: ComponentFixture<ProcuraClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcuraClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcuraClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
