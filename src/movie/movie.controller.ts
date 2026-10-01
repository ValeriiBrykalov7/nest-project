import {Body, Controller, Get, Headers, Ip, Post, Query, Req, Res, Session} from '@nestjs/common';
import {MovieService} from './movie.service.js';
import type {Request, Response} from 'express';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  getAllMovies(@Query() query: string) {
    return JSON.stringify(query);
  }

  @Post()
  createMovie(@Body('title') title: string, @Body('director') director: string) {
    return {message: `Movie created with title: ${title} and director: ${director}`};
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
