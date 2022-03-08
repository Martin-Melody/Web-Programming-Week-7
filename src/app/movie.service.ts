import { Injectable } from '@angular/core';
import {Movie} from "./movie.model";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  movie!:Movie;

   movieList = [
    {title: 'The Godfather', year: '1972', director: 'Francis Fod Coppola'},
    {title: 'Millers Crossing', year: '1990', director: 'The Coen Brothers'},
    {title: 'Dial M for Murder', year: '1954', director: 'Alfred Hitchcock'},
    {title: 'Whiplash', year: '2014', director: 'Damien Chazelle'}
  ];

  getMovies(){
    return this.movieList;
  }

  addMovie(movietitle:string, moviedirector:string, movieyear:string){
    this.movieList.push({title:movietitle, director:moviedirector, year:movieyear});
  }


}


