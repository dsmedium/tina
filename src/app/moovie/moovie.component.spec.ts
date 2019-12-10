import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoovieComponent } from './moovie.component';

describe('MoovieComponent', () => {
  let component: MoovieComponent;
  let fixture: ComponentFixture<MoovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
