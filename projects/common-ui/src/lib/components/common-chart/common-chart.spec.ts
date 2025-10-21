import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonChart } from './common-chart';

describe('CommonChart', () => {
  let component: CommonChart;
  let fixture: ComponentFixture<CommonChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
