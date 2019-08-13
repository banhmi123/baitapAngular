import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap1SlidebarComponent } from './baitap1-slidebar.component';

describe('Baitap1SlidebarComponent', () => {
  let component: Baitap1SlidebarComponent;
  let fixture: ComponentFixture<Baitap1SlidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap1SlidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap1SlidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
