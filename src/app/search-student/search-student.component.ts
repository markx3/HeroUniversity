import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student'

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  search: string;
  students: Student[];

  getStudent(key: string): void {
      this.studentService
          .getStudent(key)
          .then(students => this.students = students);
  }

  btnSearch = function() {
      this.getStudent(this.search);
  }

  ngOnInit() {
  }

}
