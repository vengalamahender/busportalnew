import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayinghoursconnfigComponent } from './playinghoursconnfig.component';

describe('PlayinghoursconnfigComponent', () => {
  let component: PlayinghoursconnfigComponent;
  let fixture: ComponentFixture<PlayinghoursconnfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayinghoursconnfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayinghoursconnfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
