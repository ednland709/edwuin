import { Component, OnInit, OnDestroy } from '@angular/core';
import { DynamicsService } from '../dynamics.service';
import { DataTableModule, SharedModule } from 'primeng/primeng';


import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dynamics-list',
  templateUrl: './dynamics-list.component.html'
})
export class DynamicsListComponent implements OnInit {
  private sub: any;
  private collection: string;
  private tableData: any;
  private cols: any[];
  private collectionDef: any;

  constructor(
    private route: ActivatedRoute,
    private _dynamicsService: DynamicsService
  ) { }

  async ngOnInit() {
    no toma el collection
     const collection = +this.route.snapshot.paramMap.get('collection');
    
    const ladef = await this._dynamicsService.getDefinition(this.collection);
    // load the data for the collection
    this.tableData = this._dynamicsService.list({ collection: this.collection, limit: 5, skip: 10 });

    // generat columns structure
    if (ladef) {
      this.collectionDef = ladef;
      for (const field of this.collectionDef.fields) {
        for (const control of field.controls) {
          const pos = this.collectionDef.projection.indexof(control.name)
          if (pos) {
            const item = { 'field': control.name, 'header': control.title };
            this.cols.push(item);
          }
        }
      }
    }
  }
}
