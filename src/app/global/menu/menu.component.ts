import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/components/common/api';
import {MenuService} from './menu.service'

@Component({
  selector: 'app-menu',
  template: `<p-menubar class= "navbar navbar-inverse bg-inverse" [model]="items">
                <button class="btn btn-primary">
                    <i class="fa fa-sign-out"></i>
                </button>
            </p-menubar >`
})
export class MenuComponent implements OnInit {
  items: MenuItem[];

  constructor(private menuService: MenuService ) { }

  async ngOnInit() {
     const res = await this.menuService.get();
     if (res && res.status === 1){
        this.items = res.data;
     }
  }

}
