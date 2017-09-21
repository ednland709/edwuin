import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DynamicsService } from '../dynamics.service';
import { TabViewModule } from 'primeng/primeng';


@Component({
  selector: 'app-dynamics-merge',
  templateUrl: './dynamics-merge.component.html'
})
export class DynamicsMergeComponent implements OnInit, OnDestroy {
  private sub: any;
  private collection: string;
  private id: string;
  private definition: any;
  private ladef: string;
  public formData = {};
  public salida;

  constructor(private route: ActivatedRoute, private _dynamicsService: DynamicsService) {
    this.sub = this.route.params.subscribe(params => {
      this.ladef = params['data'];
      const data = JSON.parse(params['data']);
      this.id = data.id;
      this.definition = data.definition;
    });
  }

  ngOnInit() {
    if (this.definition) {
      // converte the view
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  save(theData: any) {
    this.salida = theData;
    console.log('aja');
    console.log(theData.controls["rz"].errors);
  }
}
