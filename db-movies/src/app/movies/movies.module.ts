import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { DbMoivesService } from '../shared/db-moives.service';

@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule
  ],
  declarations: [MoviesComponent],
  providers:[DbMoivesService]
})
export class MoviesModule { }
