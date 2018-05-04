import { MovieDataService } from './../shared/movie-data.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { DbMoivesService } from '../shared/db-moives.service';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { PaginationService } from '../theme/pagination-bar/pagination.service';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap/pagination/pagination';
import { ThemeModule } from '../theme/theme.module';
import { AppHightLightDirective } from '../shared/directives/app-hight-light.directive';

@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule,
    ThemeModule
  ],
  declarations: [MoviesComponent, MovieDetailComponent, AppHightLightDirective],
  providers:[DbMoivesService, PaginationService, MovieDataService]
})
export class MoviesModule { }
