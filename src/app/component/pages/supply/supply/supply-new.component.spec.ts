import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyNewComponent } from './supply-new.component';

describe('SupplyComponent', () => {
  let component: SupplyNewComponent;
  let fixture: ComponentFixture<SupplyNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplyNewComponent]
    });
    fixture = TestBed.createComponent(SupplyNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
