import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorListViewComponent } from './director-list-view.component';

describe('DirectorListViewComponent', () => {
  let component: DirectorListViewComponent;
  let fixture: ComponentFixture<DirectorListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
