import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtBusComponent } from './bt-bus.component';

describe('BtBusComponent', () => {
  let component: BtBusComponent;
  let fixture: ComponentFixture<BtBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
