import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
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

@Component({
  selector: 'app-demo-form',
  standalone: true,
  imports: [
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
    MatIconModule
  ],
  templateUrl: './demo-form.html',
  styleUrls: ['./demo-form.scss']
})
export class DemoForm {
  demoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.demoForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      description: [''],
      assetType: ['', Validators.required],
      riskLevel: ['medium'],
      agreeTerms: [false, Validators.requiredTrue],
      purchaseDate: [new Date()],
      // allocation: [50],
      country: ['us']
    });
  }

  onSubmit(): void {
    if (this.demoForm.invalid) {
      this.demoForm.markAllAsTouched();
      return;
    }
    console.log('DemoForm submitted:', this.demoForm.value);
    alert('DemoForm submitted (check console)');
  }

  resetForm(): void {
    this.demoForm.reset({ riskLevel: 'medium', country: 'us', purchaseDate: new Date() });
  }
}
