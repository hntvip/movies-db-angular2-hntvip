import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies.component';
const routes: Routes = [
  { path: '', component: MoviesComponent},
  { path: 'top-rated', component: MoviesComponent},
  { path: 'upComming', component: MoviesComponent},
  { path: 'now-playing', component: MoviesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
