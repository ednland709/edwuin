import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/components/common/api';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { MenuObservable } from './menu.observable';

@Component({
  selector: 'app-menu',
  template: `{{visible}}
            <button (click) = 'logout()' class="btn btn-primary">
              <i class="fa fa-sign-out"></i>
            </button>
            <p-menubar *ngIf="visible" class= "navbar navbar-inverse bg-inverse" [model]="items">
                <button (click) = 'logout()' class="btn btn-primary">
                    <i class="fa fa-sign-out"></i>
                </button>
            </p-menubar >`
})
export class MenuComponent implements OnInit, OnDestroy {
  items: MenuItem[];
  visible = false;
  subscription: Subscription;

  constructor(
    private _router: Router,
    private _menuObservable: MenuObservable
  ) { }

  logout() {
    localStorage.clear();
    this._router.navigate(['/core/login']);
    this.items = [];
    this.visible = false;
  }

  async ngOnInit() {
    this.subscription = this._menuObservable.navItem$.subscribe(
      item => {
        this.items = item;
        if (this.items !== null && this.items.length > 0) {
          this.visible = true;
        } else {
          this.visible = false;
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
