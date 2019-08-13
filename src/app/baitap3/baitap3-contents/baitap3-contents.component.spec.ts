import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap3ContentsComponent } from './baitap3-contents.component';

describe('Baitap3ContentsComponent', () => {
  let component: Baitap3ContentsComponent;
  let fixture: ComponentFixture<Baitap3ContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap3ContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap3ContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
