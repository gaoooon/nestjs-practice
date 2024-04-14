import { Injectable } from '@nestjs/common';
import Movie from './entities/Movie.entity';
import { GetMoviesType } from './types/return';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getMovies(): GetMoviesType {
    return { date: new Date(), data: this.movies };
  }
}
