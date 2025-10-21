import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonUi } from './common-ui';

describe('CommonUi', () => {
  let component: CommonUi;
  let fixture: ComponentFixture<CommonUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonUi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
