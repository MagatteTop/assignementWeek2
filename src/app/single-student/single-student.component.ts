import {Component, Input, OnInit} from '@angular/core';
import {Student} from "../models/students.model";
import {StudentService} from "../services/student.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-single-student',
  templateUrl: './single-student.component.html',
  styleUrls: ['./single-student.component.scss']
})
export class SingleStudentComponent implements OnInit {
  students!: Student[];

  constructor(private  studentService: StudentService,
              private router: Router) { }

  ngOnInit(): void {
    let idClass=1;
    this.students = this.studentService.getStudentsByClass(idClass);

  }

}
