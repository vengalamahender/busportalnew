import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayauditlistComponent } from './playauditlist.component';

describe('PlayauditlistComponent', () => {
  let component: PlayauditlistComponent;
  let fixture: ComponentFixture<PlayauditlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayauditlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayauditlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
