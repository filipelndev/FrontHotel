import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaCalendarioDetailComponent } from './reserva-calendario-detail.component';

describe('ReservaCalendarioDetailComponent', () => {
  let component: ReservaCalendarioDetailComponent;
  let fixture: ComponentFixture<ReservaCalendarioDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaCalendarioDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaCalendarioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
