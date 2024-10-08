import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ShowDataComponent } from './show-data/show-data.component';
import { AddCourseCompComponent } from './add-course-comp/add-course-comp.component';
import { FormsModule } from '@angular/forms';
import { CourseListComponent } from './course-list/course-list.component';
import { UpdateCourseComponent } from './update-course/update-course.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowDataComponent,
    AddCourseCompComponent,
    CourseListComponent,
    UpdateCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
