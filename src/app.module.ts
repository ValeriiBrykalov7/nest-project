import {Module} from '@nestjs/common';
import {AppController} from './app.controller.js';
import {AppService} from './app.service.js';
import {TaskModule} from './task/task.module.js';
import {MovieModule} from './movie/movie.module.js';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [TaskModule, MovieModule],
})
export class AppModule {}
