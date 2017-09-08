import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/components/common/api';
import { Router } from '@angular/router';
import { Subscription } from "rxjs/Subscription";


@Component({
  selector: 'app-menu',
  template: `<p-menubar class= "navbar navbar-inverse bg-inverse" [model]="items">
                <button (click) = 'logout()' class="btn btn-primary">
                    <i class="fa fa-sign-out"></i>
                </button>
            </p-menubar >`
})
export class MenuComponent implements OnInit, OnDestroy {
  items: MenuItem[];
  visible = false;
  private countdownEndRef: Subscription = null;

  constructor(
    private _router
  ) { }

  logout() {
    localStorage.clear();
    this._router.navigate(['/core/login']);
  }

  async ngOnInit() {
    
  }

  ngOnDestroy() {

  }

}
