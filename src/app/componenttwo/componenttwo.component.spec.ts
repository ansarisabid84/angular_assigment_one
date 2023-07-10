import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenttwoComponent } from './componenttwo.component';

describe('ComponenttwoComponent', () => {
  let component: ComponenttwoComponent;
  let fixture: ComponentFixture<ComponenttwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenttwoComponent]
    });
    fixture = TestBed.createComponent(ComponenttwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
