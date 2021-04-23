import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmacoCardComponent } from './farmaco-card.component';

describe('FarmacoCardComponent', () => {
  let component: FarmacoCardComponent;
  let fixture: ComponentFixture<FarmacoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmacoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmacoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
