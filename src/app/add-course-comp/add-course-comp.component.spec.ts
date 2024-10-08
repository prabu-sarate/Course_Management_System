import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseCompComponent } from './add-course-comp.component';

describe('AddCourseCompComponent', () => {
  let component: AddCourseCompComponent;
  let fixture: ComponentFixture<AddCourseCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCourseCompComponent]
    });
    fixture = TestBed.createComponent(AddCourseCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
