import { Injectable, HttpService } from '@nestjs/common';
import { Article } from '../Article.model';
import { map } from 'rxjs/operators';
import { AxiosResponse } from 'axios';

@Injectable()
export class NytService {
  constructor(private http: HttpService) {}

  myKey = 'V3kTgABYvDkWiMKypXVMeGzrXcFYyJsS';

  getArticles(query: string) {
    const result: Array<Article> = [];
    return this.http
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${this.myKey}`,
      )
      .pipe(
        map((response: AxiosResponse) => {
          const articles = response.data.response.docs;
          for (const art in articles) {
            const id = articles[art]._id;
            const title = articles[art].headline.main;
            const published = articles[art].pub_date;
            const url = articles[art].web_url;
            const newArt = new Article(id, title, published, url);
            result.push(newArt);
          }
          return result;
        }),
      );
  }
}
