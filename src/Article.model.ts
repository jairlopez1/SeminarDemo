export class Article {
  id: string;
  title: string;
  published: Date;
  url: string;

  constructor(id: string, title: string, published: Date, url: string) {
    this.id = id;
    this.title = title;
    this.published = published;
    this.url = url;
  }
}
