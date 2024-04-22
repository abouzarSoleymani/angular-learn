import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateHeightComponent } from './calculate-height.component';

describe('CalculateHeightComponent', () => {
  let component: CalculateHeightComponent;
  let fixture: ComponentFixture<CalculateHeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculateHeightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculateHeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
