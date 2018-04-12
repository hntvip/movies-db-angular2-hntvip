import { MovieDataService } from './../shared/movie-data.service';
import { Component, OnInit } from '@angular/core';
import { DbMoivesService } from '../shared/db-moives.service';
import { Movie } from './movie';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';
import { PaginationService } from '../theme/pagination-bar/pagination.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  pages: number;
  movies : Movie[];

  private sub: Subscription;

  constructor(
    private service: DbMoivesService, 
    private route : ActivatedRoute, 
    private paService: PaginationService,
    private movieDataService: MovieDataService) {  
  }
  
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let category = params['category'];
      
      if(category == 'popular'){
        this.getMoives('popular');
      } else if(category == 'upcoming'){
        this.getMoives('upcoming');
      } else if(category == 'now_playing'){
        this.getMoives('now_playing');
      } else {
        this.getMoives('top_rated');
      }

      // listening page change
      this.paService.changePage.subscribe( page => {
        this.getMoives(category, page);
      });
      // listenning search movie
      this.movieDataService.changeData.subscribe( data =>{
        this.movies = data["results"];
      });

    });

   
  }
  
  getMoives(type : string,  page?: number) {
    this.service.getMovies(type, page).subscribe(data => {
      this.movies = data['results'];
      this.paService.getTotalItems(data['total_results']);
    });
  } 
  
}
