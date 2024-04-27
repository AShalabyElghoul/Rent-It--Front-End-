import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentlyComponent } from './frequently.component';

describe('FrequentlyComponent', () => {
  let component: FrequentlyComponent;
  let fixture: ComponentFixture<FrequentlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrequentlyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrequentlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
