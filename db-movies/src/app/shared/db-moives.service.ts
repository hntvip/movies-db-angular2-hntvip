import { Movie } from './../movies/movie';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class DbMoivesService {
  
  private  baseUrl = "https://api.themoviedb.org/3/movie";
  private  type = "";
  private  apiKey = "39dfc63bddc9461c20f39a37a3044237";
  private  language = "en-US";
  private  page = 1;

  constructor(private http: HttpClient) { }
  
  //https://api.themoviedb.org/3/movie/popular?api_key=39dfc63bddc9461c20f39a37a3044237&language=en-US&page=1
  // we have 4 type of movies : popular, top rated, upComming, now playing
  
  getMovies(type: string) : Observable<Movie[]> {
    if(type == "popular"){
     return this.getPopular();
    }else if(type == "top_rated"){
      return this.getTopRated();
    }else if(type == "upcoming"){
      return this.getUpComming();
    }else {
      // now_playing
      return this.getNowPlaying();
    }
  }

  private getPopular() : Observable<Movie[]> {
    let url = this.getUrl("popular");
    return this.http.get<Movie[]>(url);
  }

  private getTopRated() : Observable<Movie[]> {
    let url = this.getUrl("top_rated");
    return this.http.get<Movie[]>(url);
  }

  private getUpComming() : Observable<Movie[]> {
    let url = this.getUrl("upcoming");
    return this.http.get<Movie[]>(url);
  }

  private getNowPlaying() : Observable<Movie[]> {
    let url = this.getUrl("now_playing");
    return this.http.get<Movie[]>(url);
  }

  private getUrl(type: string) : string{
    let privateURL = `${this.baseUrl}/${type}?api_key=${this.apiKey}&language=${this.language}&page=${this.page}`;
    return privateURL;
  }

}
