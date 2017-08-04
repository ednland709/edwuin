import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dynamics-list',
  templateUrl: './dynamics-list.component.html'
})
export class DynamicsListComponent implements OnInit {
  private sub: any;
  private collection: string;
  private dataTable: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.collection = params['collection']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.

      //get the table list

    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
