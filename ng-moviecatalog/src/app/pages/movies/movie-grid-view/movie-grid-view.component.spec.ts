import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieGridViewComponent } from './movie-grid-view.component';

describe('MovieGridViewComponent', () => {
  let component: MovieGridViewComponent;
  let fixture: ComponentFixture<MovieGridViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieGridViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
