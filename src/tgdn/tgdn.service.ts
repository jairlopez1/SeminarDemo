import { Injectable, HttpService } from '@nestjs/common';
import { Article } from '../Article.model';
import { map } from 'rxjs/operators';
import { AxiosResponse } from 'axios';

@Injectable()
export class TgdnService {
  constructor(private http: HttpService) {}

  myKey = '00fe004a-39a8-4083-a6e6-40a22aedd47d';

  getArticles(query: string) {
    const result: any = [];
    return this.http
      .get(
        `https://content.guardianapis.com/search?q=${query}&api-key=${this.myKey}`,
      )
      .pipe(
        map((response: AxiosResponse) => {
          const articles = response.data.response.results;
          for (const art in articles) {
            const id = articles[art].id;
            const title = articles[art].webTitle;
            const published = articles[art].webPublicationDate;
            const url = articles[art].webUrl;
            const newArt = new Article(id, title, published, url);
            result.push(newArt);
          }
          return result;
        }),
      );
  }
}
