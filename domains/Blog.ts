export class Blog {
  id: string;
  title: string;
  content: string;
  image: string;

  constructor(id: string, title: string, content: string, image: string) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.image = image;
  }
}
