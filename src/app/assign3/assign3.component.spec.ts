import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assign3Component } from './assign3.component';

describe('Assign3Component', () => {
  let component: Assign3Component;
  let fixture: ComponentFixture<Assign3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assign3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assign3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
