import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundPagecComponent } from './not-found-pagec.component';

describe('NotFoundPagecComponent', () => {
  let component: NotFoundPagecComponent;
  let fixture: ComponentFixture<NotFoundPagecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotFoundPagecComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotFoundPagecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
