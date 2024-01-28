import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderNewComponent } from './provider-new.component';

describe('ProviderNewComponent', () => {
  let component: ProviderNewComponent;
  let fixture: ComponentFixture<ProviderNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProviderNewComponent]
    });
    fixture = TestBed.createComponent(ProviderNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
