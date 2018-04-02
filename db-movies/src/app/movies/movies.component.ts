import { Component, OnInit } from '@angular/core';
import { DbMoivesService } from '../shared/db-moives.service';
import { Movie } from './movie';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies : Movie[];

  constructor(private service: DbMoivesService) { }
  
  ngOnInit() {
    this.getMoives();
  }
  
  getMoives(){
    this.service.getPopular().subscribe(data => { this.movies = data['results']});
  } 
  
  
}
