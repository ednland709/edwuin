import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {
  public fecha = new Date();

  constructor() { }

  ngOnInit() {
  }

  ponerfecha() {
    this.fecha = new Date();
  }
}
