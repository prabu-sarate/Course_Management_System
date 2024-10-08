import { Component } from '@angular/core';
import { JavaServiceService } from '../java-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css'],
})
export class UpdateCourseComponent {
  constructor(
    private route: ActivatedRoute,
    private service: JavaServiceService,private r:Router
  ) {}
 

  newid: any;
  course={
    id:'',
    title:''
    ,description:''
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.newid = params.get('id');
      this.getCourse()
    });

  }
  
  getCourse(){
      this.service.getCourse(this.newid).subscribe((data)=>{
        this.course=data
        console.log(this.course)
      })
  }

  updateCourse(){
    this.service.updateCourse(this.course).subscribe((data)=>{
      this.r.navigate(['/courselist'])
    })
  }
}
