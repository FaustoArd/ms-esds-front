import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTemplateComponent } from './dialog-template.component';

describe('DialogTemplateComponent', () => {
  let component: DialogTemplateComponent;
  let fixture: ComponentFixture<DialogTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogTemplateComponent]
    });
    fixture = TestBed.createComponent(DialogTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
