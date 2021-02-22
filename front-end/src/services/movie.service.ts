import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {HttpClient } from '@angular/common/http';
import { serverUrl } from '../configs/server.config';
import {Movie } from './../models/movie.model';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public moviesSelected$: Subject<Movie[]> = new Subject();

  private moviesUrl = serverUrl + '/movies';
  
  constructor(private http: HttpClient) { }

  getMovieByName(name){
    const urlWithId = this.moviesUrl +'/'+name;
    this.http.get<Movie[]>(urlWithId).subscribe((movies) => {
      this.moviesSelected$.next(movies);
    });
  }
}
