import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/components/common/api';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { MenuObservable } from './menu.observable';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-menu',
  template: `<p-menubar *ngIf="visible" class= "navbar navbar-inverse bg-inverse" [model]="items">
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
    private _menuObservable: MenuObservable,
    private _loginService: LoginService
  ) { }

  async logout() {
    try {
      await this._loginService.logout();
      this.items = [];
      this.visible = false;
      localStorage.clear();
      this._router.navigate(['/core/login']);
    } catch (e) {
      console.log(e);
    }
  }

  ngOnInit() {
    this.subscription = this._menuObservable.navItem$.subscribe(
      item => {
        if (item === null) {
          if (localStorage.getItem('currentUser')) {
            const currentUser: any = JSON.parse(localStorage.getItem('currentUser'));
            if (currentUser !== undefined && currentUser !== null) {
              this.items = currentUser.menu;
              this.visible = true;
            }
          }
        } else {
          this.items = item;
          console.log(item);
          if (this.items !== null && this.items.length > 0) {
            this.visible = true;
          } else {
            this.visible = false;
          }
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
