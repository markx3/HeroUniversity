import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
