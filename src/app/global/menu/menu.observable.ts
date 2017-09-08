import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class MenuEventsManager {
    public showMenu(): EventEmitter<any> = new EventEmitter();
    public hideMenu(): EventEmitter<any> = new EventEmitter();
}
