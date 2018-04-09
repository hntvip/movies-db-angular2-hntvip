import { Component, OnInit } from '@angular/core';
import { DbMoivesService } from '../shared/db-moives.service';
import { Movie } from './movie';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  urlActivated : any;
  movies : Movie[];

  constructor(private service: DbMoivesService, private route : ActivatedRoute) {
    this.route.params.map(p => p.id);
      this.urlActivated = data;
    })
    
  }
  
  ngOnInit() {
    this.getMoives(this.urlActivated);
  }
  
  getMoives(type) {
    this.service.getMovies(type).subscribe(data => this.movies = data['results']);
  } 
  
  
}
