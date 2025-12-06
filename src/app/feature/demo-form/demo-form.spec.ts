import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { DemoForm } from './demo-form';

describe('DemoForm', () => {
  let component: DemoForm;
  let fixture: ComponentFixture<DemoForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DemoForm,
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSliderModule,
        MatButtonModule,
        MatIconModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
