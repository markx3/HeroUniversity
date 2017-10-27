import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student'
import { StudentService } from '../student.service'


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private studentService: StudentService,
              private router: Router) { }

  ngOnInit() {
  }

  model = new Student('Estudante', 'a@a.com', '01/01/1901', '08908028080', 'IT');

  courses = [ 'Computer Science', 'Maths', 'Chemistry', 'Information Systems',
              'Applied Physics', 'Theoretical Physics', 'Memeology' ];

  // courses: any[] = [
  //     {'course' : 'Ciência da Computação'},
  //     {'course' : 'Análise e Desenvolvimento de Sistemas'},
  //     {'course' : 'Matemática'},
  //     {'course' : 'Sistemas de Informação'},
  //     {'course' : 'Física Aplicada'},
  //     {'course' : 'Física Teórica'},
  //     {'course' : 'Tópicos Especiais em Memes'}
  // ]


  addStudent = function() {
      if (this.studentService.addStudent(this.model.name, this.model.email,
                                     this.model.birth, this.model.cpf,
                                     this.model.course)) {
                                         console.log("Hey!");
                                         this.router.navigate(['']);
                                     }
  }

  btnRegisterColor = 'lighten-2';
  btnRegisterFlag  = true;

  btnRegisterColorChange = function() {
      console.log("Mouse over!");
      if (this.btnRegisterFlag) {
          this.btnRegisterColor = '';
          this.btnRegisterFlag = false;
      } else {
          this.btnRegisterColor = 'lighten-2'
          this.btnRegisterFlag = true;
      }
  }



}
