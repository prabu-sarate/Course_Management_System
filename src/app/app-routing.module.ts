import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowDataComponent } from './show-data/show-data.component';
import { AddCourseCompComponent } from './add-course-comp/add-course-comp.component';
import { UpdateCourseComponent } from './update-course/update-course.component';

const routes: Routes = [
  {
    path: 'courselist',
    component: ShowDataComponent,
  },
  {
    path: 'addcourse',
    component: AddCourseCompComponent,
  },
  {
    path: 'updatecourse/:id',
    component: UpdateCourseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
