import { Component, OnInit } from '@angular/core';
import { DbMoivesService } from '../shared/db-moives.service';
import { Movie } from './movie';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  urlActivated : any;
  movies : Movie[];
  private sub: Subscription;
  constructor(private service: DbMoivesService, private route : ActivatedRoute) {  
  }
  
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if(params['category'] == 'popular'){
        this.getMoives('popular');
      } else if(params['category'] == 'upcoming'){
        this.getMoives('upcoming');
      } else if(params['category'] == 'now_playing'){
        this.getMoives('now_playing');
      } else {
        this.getMoives('top_rated');
      }
   });
  }
  
  getMoives(type : string) {
    this.service.getMovies(type).subscribe(data => this.movies = data['results']);
  } 
  
  
}
