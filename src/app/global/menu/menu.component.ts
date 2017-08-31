import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/components/common/api';
import {MenuService} from './menu.service'

@Component({
  selector: 'app-menu',
  template: '<p-menubar class= "navbar navbar-inverse bg-inverse" [model]="items"> <button class="btn btn-primary"><i class="fa fa-sign-out"></i></button></p-menubar >'
})
export class MenuComponent implements OnInit {
  items: MenuItem[];

  constructor(private menuService: MenuService ) { }

  ngOnInit() {
    this.menuService.get();

    this.items = [

            {
                label: 'Datae',
                items: [{
                        label: 'Empresas', 
                        icon: 'fa-plus',
                        routerLink: ['/core/dynamics', 'tenants']
                    },
                    {label: 'login', routerLink: ['/core/login']},
                    {label: 'Quit'}
                ]
            },
            {
                label: 'Contabilidad',
                icon: 'fa-edit',
                items: [
                    {label: 'Comprobantes', icon: 'fa-mail-forward'},
                    {label: 'Lista comprobantes', icon: 'fa-mail-reply'}
                ]
            }
        ];
  }

}
