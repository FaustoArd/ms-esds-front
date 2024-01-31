import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortNightNewComponent } from './fort-night-new.component';

describe('FortNightComponent', () => {
  let component: FortNightNewComponent;
  let fixture: ComponentFixture<FortNightNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FortNightNewComponent]
    });
    fixture = TestBed.createComponent(FortNightNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
