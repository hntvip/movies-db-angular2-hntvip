import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { DbMoivesService } from '../shared/db-moives.service';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { PaginationService } from '../theme/pagination-bar/pagination.service';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap/pagination/pagination';
import { ThemeModule } from '../theme/theme.module';

@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule,
    ThemeModule
  ],
  declarations: [MoviesComponent, MovieDetailComponent],
  providers:[DbMoivesService, PaginationService]
})
export class MoviesModule { }
