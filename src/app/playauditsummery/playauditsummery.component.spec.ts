import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayauditsummeryComponent } from './playauditsummery.component';

describe('PlayauditsummeryComponent', () => {
  let component: PlayauditsummeryComponent;
  let fixture: ComponentFixture<PlayauditsummeryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayauditsummeryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayauditsummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
