import { Component, OnInit, OnDestroy } from '@angular/core';
import { DynamicsService } from '../dynamics.service';


import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dynamics-list',
  templateUrl: './dynamics-list.component.html'
})
export class DynamicsListComponent implements OnInit {
  private sub: any;
  private collection: string;
  private tableData: any;

  constructor(private route: ActivatedRoute, private _dynamicsService: DynamicsService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.collection = params['collection']; // (+) converts string 'id' to a number

      console.log(this.collection);
      //load the data for the collection
      this.tableData = this._dynamicsService.getDefinition(this.collection);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
