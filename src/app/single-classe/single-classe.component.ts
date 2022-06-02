import { Component, OnInit } from '@angular/core';
import {Student} from "../models/students.model";
import {StudentService} from "../services/student.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';


import {ClasseService} from "../services/classe.service";

@Component({
  selector: 'app-single-classe',
  templateUrl: './single-classe.component.html',
  styleUrls: ['./single-classe.component.scss']
})
export class SingleClasseComponent implements OnInit {

  students!: Student[];
  public classeID: any;

  constructor(private classeService: ClasseService,
  private studentService: StudentService,
  private route: ActivatedRoute,
  private router: Router) {
    this.route.params.subscribe( params => console.log(params));

  }

  ngOnInit(): void {
   // let idClass=1;
    const idClass = Number(this.route.snapshot.paramMap.get('id'));
    this.students = this.studentService.getStudentsByClass(idClass);
    console.log(this.students);

    // this.students = this.studentService.getStudentsByClass(idClass);

  }
}
