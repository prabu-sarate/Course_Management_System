import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JavaServiceService } from '../java-service.service';

@Component({
  selector: 'app-add-course-comp',
  templateUrl: './add-course-comp.component.html',
  styleUrls: ['./add-course-comp.component.css'],
})
export class AddCourseCompComponent {
  course = {
    id: '',
    title: '',
    description: '',
  };

  constructor(private service: JavaServiceService, private router: Router) {}
  onSubmit() {
    this.service.addCourse(this.course).subscribe({
      next: (data) => {
        console.log(data);
      },error:(e)=>{
         console.log(e);
      }
    });
    console.log(this.course);
    this.router.navigate(['/courselist']);
  }
}
