import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListQuartosComponent } from './list-quartos.component';

describe('ListQuartosComponent', () => {
  let component: ListQuartosComponent;
  let fixture: ComponentFixture<ListQuartosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListQuartosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListQuartosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
