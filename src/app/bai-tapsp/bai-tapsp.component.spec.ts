import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTapspComponent } from './bai-tapsp.component';

describe('BaiTapspComponent', () => {
  let component: BaiTapspComponent;
  let fixture: ComponentFixture<BaiTapspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTapspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTapspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
