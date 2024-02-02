import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelForDetailComponent } from './model-for-detail.component';

describe('ModelForDetailComponent', () => {
  let component: ModelForDetailComponent;
  let fixture: ComponentFixture<ModelForDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModelForDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelForDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
