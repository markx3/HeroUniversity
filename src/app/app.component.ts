import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { StudentService } from './student.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  user  = '';

  constructor( private http: Http,
               private router: Router ) {
      console.log("Hello, user.")
  }

  btnClick = function() {
      this.router.navigate([''])
  }
}
