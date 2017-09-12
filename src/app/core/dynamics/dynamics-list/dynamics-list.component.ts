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
  ) {
    this.route.params.subscribe(params => this.collection = params.collection);
  }

  async ngOnInit() {
    try {
      const ladef = await this._dynamicsService.getDefinition(this.collection);
      // generat columns structure
      if (ladef.status === 1) {
        this.collectionDef = ladef.data;
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

      // load the data for the collection
      this.tableData = this._dynamicsService.list({ collection: this.collection, limit: 5, skip: 10 });
    } catch (e) {
      console.error(e);
    }

  }
}
