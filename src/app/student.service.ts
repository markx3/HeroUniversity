import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Student } from './student'


@Injectable()
export class StudentService {

  private studentUrl = 'http://104.233.105.140:5000/student/'
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  addStudent(name: string, email: string,
             birth: string, cpf: string,
             course: string): Promise<Student> {
      return this.http.post(this.studentUrl + 'new',
                            JSON.stringify({
                                name: name, email: email,
                                birth: birth, cpf: cpf,
                                course: course
                            }), {headers: this.headers})
                 .toPromise()
                 .then(response => console.log(response.json().result as Student))
                 .catch(this.handleError)
  }

  getStudent(name: string): Promise<Student[]> {
      return this.http.post(this.studentUrl,
                            JSON.stringify( { name : name }),
                            {headers: this.headers})
                .toPromise()
                .then(response => response.json().result as Student[])
                .catch(this.handleError)
  }

  getStudents(): Promise<Student[]> {
      return this.http.get(this.studentUrl)
             .toPromise()
             .then(response => response.json().result as Student[])
             .catch(this.handleError)
  }

  // deleteStudent(name: string): Promise<Student> {
  //     return this.http.post(this.studentUrl + '/delete')
  //           .toPromise()
  //           .then(response => response.json().result as Student)
  //           .catch(this.handleError)
  // }

  private handleError(error: any): Promise<any> {
      console.error('An error ocurred', error);
      return Promise.reject(error.message || error)
  }

}
