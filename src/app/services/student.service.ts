import {Injectable} from "@angular/core";
import {Classe } from "../models/classe.model";
import {Student} from "../models/students.model";

@Injectable({
  providedIn:'root'
})
export class StudentService {
  students: Student[] =[
    {
      id:1,
      fname: 'aly',
      lname: 'top',
      age: 19,
      idClasse: 1,
    },
    {
      id:2,
      fname: 'fatou',
      lname: 'Lo',
      age: 17,
      idClasse: 2,
    },
    {
      id:3,
      fname: 'magatte',
      lname: 'Diop',
      age: 19,
      idClasse: 5,
    },
    {
      id:4,
      fname: 'Tyma',
      lname: 'fall',
      age: 19,
      idClasse: 1,
    },
    {
      id:5,
      fname: 'magatte',
      lname: 'top',
      age: 17,
      idClasse: 1,
    },
    {
      id:6,
      fname: 'magatte',
      lname: 'top',
      age: 17,
      idClasse: 2,
    },
    {
      id:7,
      fname: 'magatte',
      lname: 'top',
      age: 17,
      idClasse: 5,
    },
    {
      id:8,
      fname: 'magatte',
      lname: 'top',
      age: 17,
      idClasse: 3,
    },
    {
      id:9,
      fname: 'mamy',
      lname: 'sall',
      age: 17,
      idClasse: 4,
    },
    {
      id:10,
      fname: 'samba',
      lname: 'top',
      age: 17,
      idClasse: 2,
    },

  ];
  //find all students
  getAllStudents(): Student[]{
    return this.students;
  }
  //find one student by id

  getStudentById(studentId:number): Student{
    const student= this.students.find(student=>student.id===studentId);
    if (!student){
      throw new Error('student not found');
    } else{
      return student;
    }
  }

  // classeById(classId:number): void{
  //   const classe = this.getClasseById(classId);
  // }

  getStudentsByClass(idClass: number) {
    // const studentByClass = this.students.find(student=>student.idClasse===idClass);
    var newArray = this.students.filter(function (el)
      {
        return el.idClasse ==idClass;
      }
    );
    console.log(newArray);

  return newArray
  }
}
