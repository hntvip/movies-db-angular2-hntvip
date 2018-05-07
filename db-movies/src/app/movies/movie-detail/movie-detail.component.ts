import { RouterModule, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DbMoivesService } from '../../shared/db-moives.service';
import { Movie } from '../movie';
import { Router } from '@angular/router/src/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  reviews : any;
  totalReviews: number;
  constructor(private service : DbMoivesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(data =>{
      let movieId = data["id"];
      this.getMovie(movieId);
      this.getReviews(movieId);
    })
  }
  
  getMovie(id: number){
    this.service.findOne(id).subscribe(data => {
      this.movie = data;
    })
  }

  getReviews(id: number, page?: number){
    this.service.getReviews(id, page).subscribe(data => {
      this.totalReviews = data["total_results"];
      this.reviews = data["results"];
    })
  }
}
