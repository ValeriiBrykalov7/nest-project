import {Global, Module} from '@nestjs/common';
import {UserService} from './user.service.js';
import {UserController} from './user.controller.js';
import {MovieModule} from '../movie/movie.module.js';

@Global()
@Module({
  imports: [MovieModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
