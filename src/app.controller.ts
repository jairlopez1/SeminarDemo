import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('articles')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:source/:query')
  getArticles(
    @Param('source') source: string,
    @Param('query') query: string,
  ): any {
    return this.appService.getArticles(source, query);
  }
}
