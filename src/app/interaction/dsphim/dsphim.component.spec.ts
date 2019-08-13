import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DSPhimComponent } from './dsphim.component';

describe('DSPhimComponent', () => {
  let component: DSPhimComponent;
  let fixture: ComponentFixture<DSPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DSPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DSPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
