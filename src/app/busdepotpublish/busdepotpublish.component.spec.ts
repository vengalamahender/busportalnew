import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusdepotpublishComponent } from './busdepotpublish.component';

describe('BusdepotpublishComponent', () => {
  let component: BusdepotpublishComponent;
  let fixture: ComponentFixture<BusdepotpublishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusdepotpublishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusdepotpublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
