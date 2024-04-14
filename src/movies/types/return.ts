import Movie from '../entities/Movie.entity';

export interface GetMoviesType {
  date: Date;
  data: Movie[];
}
