import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurarReservaComponent } from './procurar-reserva.component';

describe('ProcurarReservaComponent', () => {
  let component: ProcurarReservaComponent;
  let fixture: ComponentFixture<ProcurarReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcurarReservaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcurarReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
