import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterKeyFormComponent } from './enter-key-form.component';

describe('EnterKeyFormComponent', () => {
  let component: EnterKeyFormComponent;
  let fixture: ComponentFixture<EnterKeyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterKeyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterKeyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
