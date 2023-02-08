import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcurrencyTypeComponent } from './acurrency-type.component';

describe('AcurrencyTypeComponent', () => {
  let component: AcurrencyTypeComponent;
  let fixture: ComponentFixture<AcurrencyTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcurrencyTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcurrencyTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
