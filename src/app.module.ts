import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { NytService } from './nyt/nyt.service';
import { TgdnService } from './tgdn/tgdn.service';
import { AppService } from './app.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, NytService, TgdnService],
})
export class AppModule {}
