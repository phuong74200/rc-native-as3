import { User } from "./User";
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';

export class Blog {
  id: string;
  title: string;
  content: string;
  image: string;
  createdBy: User;

  constructor(
    id: string,
    title: string,
    content: string,
    image: string,
    createdBy: User
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.image = image;
    this.createdBy = createdBy;
  }

  async fetchBlog() {
    var asset = Asset.fromModule(require('markdown/1.md'));
    // const c = FileSystem.readAsStringAsync('../markdown/1.md')

    console.log(asset)
  }
}
