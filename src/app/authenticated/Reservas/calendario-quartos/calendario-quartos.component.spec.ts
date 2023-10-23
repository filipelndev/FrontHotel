import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioQuartosComponent } from './calendario-quartos.component';

describe('CalendarioQuartosComponent', () => {
  let component: CalendarioQuartosComponent;
  let fixture: ComponentFixture<CalendarioQuartosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarioQuartosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarioQuartosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
