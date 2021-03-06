import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'movies',
    loadChildren: 'app/movies/movies.module#MoviesModule',
  },
  { path: '', 
    redirectTo: '/movies/popular', 
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      // enableTracing: true, // <-- debugging purposes only
      // preloadingStrategy: SelectivePreloadingStrategy,
    }
  )],
  exports: [RouterModule],
  providers: [
    // CanDeactivateGuard,
    // SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }
