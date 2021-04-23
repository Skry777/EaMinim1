import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmacoFormComponent } from './farmaco-form.component';

describe('FarmacoFormComponent', () => {
  let component: FarmacoFormComponent;
  let fixture: ComponentFixture<FarmacoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmacoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmacoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
