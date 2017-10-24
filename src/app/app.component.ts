import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  user  = '';
  private apiUrl="http://localhost:80/api/";
  data: any = {};

  constructor( private http: Http,
               private router: Router ) {
      console.log("Hello, user.")
      this.getData();
  }

  getData = function() {
      return this.http.get(this.apiUrl)
      .map((res: Response) => res.json());
  }

  btnHeroClick = function() {
      this.router.navigate([''])
  }
}
