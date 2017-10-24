import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { User } from '../user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  btnClick = function () {
      this.router.navigate(['/','registration'])
  }
}
