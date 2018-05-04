import { Observable } from 'rxjs/Observable';
import { Movie } from './../movies/movie';
import { Output, Injectable, EventEmitter } from '@angular/core';
import { ListResult } from '../movies/list-result.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class MovieDataService {
  //@Output() changeData : EventEmitter<string> = new EventEmitter();
  private messageSource = new BehaviorSubject<any>("default message");
          currentMessage = this.messageSource.asObservable();
  constructor() { }
  
  // update(keyword){
  //   this.changeData.emit(keyword);
  // }

  changeData(obj: any){
    this.messageSource.next(obj);
  }
}
