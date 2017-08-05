import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DynamicsService } from '../dynamics.service';


@Component({
  selector: 'app-dynamics-merge',
  templateUrl: './dynamics-merge.component.html'
})
export class DynamicsMergeComponent implements OnInit {
  private sub: any;
  private collection: string;
  private id: number;
  private definition: any;

  constructor(private route: ActivatedRoute, private _dynamicsService: DynamicsService ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.collection = params['collection'];
      this.id = +params['id']; // (+) converts string 'id' to a number

      //get the definition
      this.definition = this._dynamicsService.get(this.id);
      

    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
