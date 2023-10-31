import { Category } from "./category";

export class Article {

  id:number;
  title:string;
  content:string;
  summaryContent:string;
  picture:string;
  publishDate:Date;
  viewCount:number;
  commentCount:number;
  category:Category
}
