import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusdeposComponent } from './busdepos.component';

describe('BusdeposComponent', () => {
  let component: BusdeposComponent;
  let fixture: ComponentFixture<BusdeposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusdeposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusdeposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
