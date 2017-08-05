import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  constructor(private router: Router) { }

  ngOnInit() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser === undefined || currentUser === null) {
      this.router.navigate(['/core']);
    }
    else {
      console.log(currentUser);
      this.router.navigate(currentUser.defaultPage);
    }

  }
}
