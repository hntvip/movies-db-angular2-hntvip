import { Observable } from 'rxjs/Observable';
import { Movie } from './../movies/movie';
import { Output, Injectable, EventEmitter } from '@angular/core';
import { ListResult } from '../movies/list-result.model';

@Injectable()
export class MovieDataService {
  @Output() changeData : EventEmitter<Array<Movie>> = new EventEmitter();
  
  constructor() { }
  
  update(data){
    this.changeData.emit(data);
  }
}
