import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoolHttp } from 'angular2-cool-http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  
  constructor(private router: Router, private coolHttp: CoolHttp) { }

  ngOnInit() {
    this.coolHttp.registerBaseUrl('http://localhost:3000/api/');
    /*
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser === undefined || currentUser === null) {
      this.router.navigate(['/core']);
    }
    else {
      console.log(currentUser);
      this.router.navigate(currentUser.defaultPage);
    }
*/
  }
}
