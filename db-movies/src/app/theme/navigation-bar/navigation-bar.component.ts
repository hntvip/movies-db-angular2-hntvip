import { DbMoivesService } from './../../shared/db-moives.service';
import { Component, OnInit } from '@angular/core';
import { Genres } from '../../movies/genres';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  genres : Array<Genres>;
  constructor(private moviesService: DbMoivesService, private route: ActivatedRoute ) {
  }

  ngOnInit() {
    this.moviesService.getGenres().subscribe(data => {
      this.genres = data['genres'];
    });
  }

}
