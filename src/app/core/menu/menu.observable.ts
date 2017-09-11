import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MenuObservable {
    // Observable navItem source
    private _menuItemSource = new BehaviorSubject<any>(null);
    // private _menuItemSource = new Subject();
    // Observable navItem stream
    navItem$ = this._menuItemSource.asObservable();
    // service command
    changeMenu(theList) {
        this._menuItemSource.next(theList);
    }
}
