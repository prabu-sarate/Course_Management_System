import { Component } from '@angular/core';
import { JavaServiceService } from '../java-service.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
course={ 
  "id":0,
  "name":'',
  "description":''
}
constructor(private service:JavaServiceService){}


}
