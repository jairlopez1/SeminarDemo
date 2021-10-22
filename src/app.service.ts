import { Injectable } from '@nestjs/common';
import { forkJoin } from 'rxjs';
import { NytService } from './nyt/nyt.service';
import { TgdnService } from './tgdn/tgdn.service';

@Injectable()
export class AppService {
  constructor(
    private readonly nytService: NytService,
    private readonly tgdnService: TgdnService,
  ) {}

  getArticles(source: string, query: string): any {
    switch (true) {
      case source === 'nyt':
        return this.nytService.getArticles(query);
        break;
      case source === 'tgdn':
        return this.tgdnService.getArticles(query);
        break;
      case source === 'allSources':
        const tgdn = this.tgdnService.getArticles(query);
        const nyt = this.nytService.getArticles(query);
        return forkJoin([nyt, tgdn]);
        break;
      default:
        return { ERROR: `Source ${source} was not found!` };
        break;
    }
  }
}
