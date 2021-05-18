import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupremetaxiComponent } from './supremetaxi.component';

describe('SupremetaxiComponent', () => {
  let component: SupremetaxiComponent;
  let fixture: ComponentFixture<SupremetaxiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupremetaxiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupremetaxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
