import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortNightCompleteComponent } from './fort-night-complete.component';

describe('FortNightCompleteComponent', () => {
  let component: FortNightCompleteComponent;
  let fixture: ComponentFixture<FortNightCompleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FortNightCompleteComponent]
    });
    fixture = TestBed.createComponent(FortNightCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
