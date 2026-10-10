import {Injectable} from '@nestjs/common';
import {MovieEntity} from './entities/movie.entity.js';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {CreateMovieDto} from './dto/create-movie.dto.js';

@Injectable()
export class MovieService {
  constructor(@InjectRepository(MovieEntity) private readonly movieRepository: Repository<MovieEntity>) {}

  async findAll(): Promise<MovieEntity[]> {
    return await this.movieRepository.find();
  }

  async createMovie(dto: CreateMovieDto): Promise<MovieEntity> {
    const movie = this.movieRepository.create(dto);
    return await this.movieRepository.save(movie);
  }
}
