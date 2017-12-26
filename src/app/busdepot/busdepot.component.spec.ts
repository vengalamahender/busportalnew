import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusdepotComponent } from './busdepot.component';

describe('BusdepotComponent', () => {
  let component: BusdepotComponent;
  let fixture: ComponentFixture<BusdepotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusdepotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusdepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
