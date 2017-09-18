import { Component, OnInit, OnDestroy } from '@angular/core';
import { DynamicsService } from '../dynamics.service';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamics-list',
  templateUrl: './dynamics-list.component.html'
})
export class DynamicsListComponent implements OnInit, OnDestroy {
  private sub: any;
  private collection: string;
  private tableData: any;
  private cols: any[] = [];
  private collectionDef: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _dynamicsService: DynamicsService
  ) {
    this.sub = this._route.params.subscribe(params => this.collection = params.collection);
    console.log('constructor de lista');
  }

  async ngOnInit() {
    console.log('init de lista');
    try {
      const ladef = await this._dynamicsService.getDefinition(this.collection);
      // generat columns structure
      if (ladef.status === 1) {
        this.collectionDef = ladef.data;
        const projectionkeys = Object.keys(this.collectionDef.projection);

        for (const tab of this.collectionDef.tabs) {
          for (const control of tab.controls) {
            for (const thekey of projectionkeys) {
              if (thekey === control.name) {
                const item = { 'field': control.name, 'header': control.title };
                this.cols.push(item);
              }
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

  nuevo() {
    const data = { id: null, definition: this.collectionDef };
    this._router.navigate(['/core/dynamics/merge', JSON.stringify(data)]);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    console.log('destructor de lista');
  }
}
