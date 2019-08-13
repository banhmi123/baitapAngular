import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap3SliderbarComponent } from './baitap3-sliderbar.component';

describe('Baitap3SliderbarComponent', () => {
  let component: Baitap3SliderbarComponent;
  let fixture: ComponentFixture<Baitap3SliderbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap3SliderbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap3SliderbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
