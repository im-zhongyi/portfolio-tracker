import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo } from './demo';
import { provideTranslateService } from '@ngx-translate/core';
import { Component, Input } from '@angular/core';


@Component({
  // Use the selector that ng2-charts uses for its directive
  selector: 'canvas[baseChart], ng-chartjs, ng-charts-base',
  template: '', // Empty template, it just acts as a placeholder
  standalone: true, // Use this if you are using Angular's standalone components
})
class MockChartComponent {
  // Mock any @Inputs the real component expects to prevent errors
  @Input() type: any; 
  @Input() data: any; 
  @Input() options: any;
}

describe('Dashboard', () => {
  let component: Demo;
  let fixture: ComponentFixture<Demo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Demo, MockChartComponent],
      providers: [
        provideTranslateService()
      ],
      // declarations: [MockChartComponent] // Declare the mock component here
    })
    .compileComponents();

    fixture = TestBed.createComponent(Demo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
