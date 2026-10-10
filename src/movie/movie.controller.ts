import {Body, Controller, Get, Headers, Ip, Post, Query, Req, Res, Session} from '@nestjs/common';
import {MovieService} from './movie.service.js';
import type {Request, Response} from 'express';
import {CreateMovieDto} from './dto/create-movie.dto.js';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  getAllMovies() {
    return this.movieService.findAll();
  }

  @Post()
  createMovie(@Body() dto: CreateMovieDto) {
    return this.movieService.createMovie(dto);
  }

  @Get('user-agent')
  getHeaders(@Headers('user-agent') userAgent: string) {
    return userAgent;
  }

  @Get('request')
  getRequest(@Req() req: Request) {
    return req.query;
  }

  @Get('response')
  getResponse(@Res() res: Response, @Ip() ip: string) {
    res.status(201).json({message: ip});
  }
}
