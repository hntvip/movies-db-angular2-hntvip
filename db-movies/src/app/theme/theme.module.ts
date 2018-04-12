import { MovieDataService } from './../shared/movie-data.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DbMoivesService } from '../shared/db-moives.service';
import { PaginationBarComponent } from './pagination-bar/pagination-bar.component';
import { PaginationService } from './pagination-bar/pagination.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [NavigationBarComponent, PaginationBarComponent],
  exports: [ NavigationBarComponent, PaginationBarComponent ],
  providers: [DbMoivesService, PaginationService, MovieDataService]
})
export class ThemeModule { }
