import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieItemViewComponent } from './movie-item-view.component';

describe('MovieItemViewComponent', () => {
  let component: MovieItemViewComponent;
  let fixture: ComponentFixture<MovieItemViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieItemViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
