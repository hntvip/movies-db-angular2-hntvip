import {Injectable, Output , EventEmitter} from '@angular/core';

@Injectable()
export class PaginationService {
  @Output() changeSize: EventEmitter<number> = new EventEmitter();
  @Output() changePage: EventEmitter<number> = new EventEmitter();
  constructor() { }

  getTotalItems(items : number){
    this.changeSize.emit(items);
  }

  changeCurrentPage(item: number){
    this.changePage.emit(item);
  }
}
