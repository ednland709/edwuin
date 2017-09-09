import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MenuObservable {
    // Observable navItem source
    private _menuItemSource = new BehaviorSubject<any>(0);
    // Observable navItem stream
    navItem$ = this._menuItemSource.asObservable();
    // service command
    changeMenu(theList) {
        this._menuItemSource.next(theList);
    }
}
