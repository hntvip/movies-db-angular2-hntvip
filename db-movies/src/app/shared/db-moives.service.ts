import { Movie } from './../movies/movie';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Genres } from '../movies/genres';
import { ListResult } from '../movies/list-result.model';
@Injectable()
export class DbMoivesService {
  
  private  version = "3";
  private  baseUrl = `https://api.themoviedb.org/${this.version}`;
  private  apiKey = "39dfc63bddc9461c20f39a37a3044237";
  private  language = "en-US";
  private  page = 1;
  private  kind = "movie";

  constructor(private http: HttpClient) { }
  
  //https://api.themoviedb.org/3/movie/popular?api_key=39dfc63bddc9461c20f39a37a3044237&language=en-US&page=1
  // we have 4 type of movies : popular, top rated, upComing, now playing
  
  getMovies(type: string, page?: number) : Observable<Movie[]> {
    if(type == "popular"){
      let url = this.getUrl("popular", page);
      return this.http.get<Movie[]>(url);
    }else if(type == "top_rated"){
      let url = this.getUrl("top_rated", page);
      return this.http.get<Movie[]>(url);
    }else if(type == "upcoming"){
      let url = this.getUrl("upcoming", page);
      return this.http.get<Movie[]>(url);
    }else {
      let url = this.getUrl("now_playing", page);
      return this.http.get<Movie[]>(url);
    }
  }

  getGenres(): Observable<Genres[]>{
    let kind = "genre/movie/list";
    let url = `${this.baseUrl}/${kind}?api_key=${this.apiKey}&language=${this.language}`;
    return this.http.get<Genres[]>(url);
  }

  findOne(movieId : number): Observable<Movie>{
    let url = `${this.baseUrl}/${this.kind}/${movieId}?api_key=${this.apiKey}&language=${this.language}`;
    return this.http.get<Movie>(url);
  }

  search(keyword: string, page?: number): Observable<ListResult<Movie>>{
    // we have many options : include_adult, region, year, primary_release_year
    let _page = page || 1;
    let url = `${this.baseUrl}/search/movie?api_key=${this.apiKey}&language=${this.language}&page=${_page}&query=${keyword}`;
    return this.http.get<ListResult<Movie>>(url);
  }

  getReviews(id : number, page?: number) : Observable<any> {
    let _page = page || 1;
     let url= `${this.baseUrl}/${this.kind}/${id}/reviews?api_key=${this.apiKey}&language=${this.language}&page=${_page}`;
     return this.http.get(url);
  }

  private getUrl(type: string, pageNumber?: number) : string{
    let page = pageNumber || this.page; 
    let privateURL = `${this.baseUrl}/${this.kind}/${type}?api_key=${this.apiKey}&language=${this.language}&page=${page}`;

    return privateURL;
  }
  

}
