import { Component } from '@angular/core';
import { JavaServiceService } from '../java-service.service';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css'],
})
export class ShowDataComponent {
  constructor(private service: JavaServiceService) {}
  info: any;

  ngOnInit() {
    this.service.getdatafromjava().subscribe((data: any) => {
      console.log(data);
      this.info = data;
    });
  }
  deleteCourse(id: any) {
    this.service.deleteCourse(id).subscribe((data: any) => {
      console.log(data);
      this.getCourses();
    });
  }
  getCourses() {
    this.service.getdatafromjava().subscribe((data: any) => {
      this.info = data;
    });
  }

  updateCourse(id: any) {
    this.updateCourse
  }
}
