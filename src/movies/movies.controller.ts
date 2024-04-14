import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { GetMoviesType } from './types/return';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getMovies(): GetMoviesType {
    return this.moviesService.getMovies();
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `This will return one movie ${id}`;
  }

  @Post()
  postMovie(@Body() movieData) {
    console.log(movieData);
    return 'created!!';
  }
}
