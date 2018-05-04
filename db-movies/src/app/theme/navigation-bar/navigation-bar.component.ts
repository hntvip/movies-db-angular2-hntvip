import { MoviesComponent } from './../../movies/movies.component';
import { MovieDataService } from './../../shared/movie-data.service';
import { DbMoivesService } from './../../shared/db-moives.service';
import { Component, OnInit } from '@angular/core';
import { Genres } from '../../movies/genres';
import { ActivatedRoute } from '@angular/router';
import { PaginationService } from '../pagination-bar/pagination.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  genres : Array<Genres>;
  constructor(
    private moviesService: DbMoivesService, 
    private route: ActivatedRoute , 
    private paService: PaginationService,
    private movieDataService: MovieDataService) {}

  ngOnInit() {
    this.moviesService.getGenres().subscribe(data => {
      this.genres = data['genres'];
    });
  }

  searchMovie(keyword: string, page?: number){
    // this.moviesService.search(keyword, page).subscribe(data => {
    //   //listening data from search
    //   this.movieDataService.update(data);
    // }); 
    let object = {keyword: keyword, page: page};
    this.movieDataService.changeData(object)
  }

  

}
