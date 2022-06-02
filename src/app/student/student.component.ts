import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Student} from "../models/students.model";
import {StudentService} from "../services/student.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  @Input() student!: Student;
  students!: Student[];

  classSelected = '';

  constructor(private  studentService: StudentService,
              private router: Router) {
  }

  ngOnInit() {
    this.students = this.studentService.getAllStudents();

  }
}
