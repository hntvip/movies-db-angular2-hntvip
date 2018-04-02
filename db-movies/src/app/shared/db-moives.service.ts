import { Movie } from './../movies/movie';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class DbMoivesService {
  
  private  baseUrl = "https://api.themoviedb.org/3/movie";
  private  type = "popular";
  private  apiKey = "39dfc63bddc9461c20f39a37a3044237";
  private  language = "en-US";
  private  page = 1;

  constructor(private http: HttpClient) { }
  
  //https://api.themoviedb.org/3/movie/popular?api_key=39dfc63bddc9461c20f39a37a3044237&language=en-US&page=1
  getPopular() : Observable<Movie[]> {
    let url = `${this.baseUrl}/${this.type}?api_key=${this.apiKey}&language=${this.language}&page=${this.page}`;
    return this.http.get<Movie[]>(url);
  }

}
