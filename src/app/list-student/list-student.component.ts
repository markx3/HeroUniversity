import { Component, OnInit } from '@angular/core';
import { Student } from '../student'
import { StudentService } from '../student.service'
import { Http } from '@angular/http'

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  students: Student[];

  constructor(private studentService: StudentService,
              private http: Http) { }

  getStudents(): void {
      this.studentService
          .getStudents()
          .then(students => this.students = students);
  }

  ngOnInit() {
      this.getStudents();
  }
}
