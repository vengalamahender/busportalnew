import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuspublishComponent } from './buspublish.component';

describe('BuspublishComponent', () => {
  let component: BuspublishComponent;
  let fixture: ComponentFixture<BuspublishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuspublishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuspublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
