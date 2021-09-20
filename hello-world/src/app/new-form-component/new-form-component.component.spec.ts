import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFormComponentComponent } from './new-form-component.component';

describe('NewFormComponentComponent', () => {
  let component: NewFormComponentComponent;
  let fixture: ComponentFixture<NewFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFormComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
