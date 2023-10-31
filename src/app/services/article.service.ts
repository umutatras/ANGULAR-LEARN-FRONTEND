import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { ArticlePg } from '../models/article-pg';
import {tap} from "rxjs/operators";
import { Article } from '../models/article';
import { Archive } from '../models/archive';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient:HttpClient) { }
  public loading:boolean=true;
  private apiUrl:string="https://localhost:7146/api/articles";

  getArticlesWithoutPg()
  {
    return this.httpClient.get<Article[]>(this.apiUrl);
  }
  getArticles(page:number,pageSize:number){
    let api=`${this.apiUrl}/${page}/${pageSize}`;
    return this.httpClient.get<ArticlePg>(api).pipe(tap(t=>{
      this.loading=false;
    }));
  }

  getArticlesById(id:number){
    let api=`${this.apiUrl}/${id}`;
    return this.httpClient.get<Article>(api).pipe(tap(t=>{
      this.loading=false;
    }));
  }

  getArticleWithCategory(categoryId:number,page:number,pageSize:number)
  {
    let api=`${this.apiUrl}/GetArticleWithCategory/${categoryId}/${page}/${pageSize}`;
    return this.httpClient.get<ArticlePg>(api).pipe(tap(t=>{
      this.loading=false;
    }));
  }

  getSearchArticles(searchText:string,page:number,pageSize:number)
  {
    let api=`${this.apiUrl}/SearchArticles/${searchText}/${page}/${pageSize}`;
    return this.httpClient.get<ArticlePg>(api).pipe(tap(t=>{
      this.loading=false;
    }));
  }
  getByMostViewArticle(){
    let api=`${this.apiUrl}/GetByMostViewArticle`;
    return this.httpClient.get<Article[]>(api);
  }
  getArticlesArchive(){
    let api=`${this.apiUrl}/GetArticlesArchive`;
    return this.httpClient.get<Archive[]>(api);

  }
  getArchiveArticleList(year:number,month:number,page:number,pageSize:number){
    let api=`${this.apiUrl}/GetArchiveArticleList/${year}/${month}/${page}/${pageSize}`;
    return this.httpClient.get<ArticlePg>(api).pipe(tap(t=>{
      this.loading=false;
    }));

  }

  articleViewCountUp(id:number)
  {
    let api=`${this.apiUrl}/ArticleViewCountUp/${id}`;
    return this.httpClient.get(api);
  }

  saveArticlePicture(image:any)
  {
    return this.httpClient.post<any>(`${this.apiUrl}/SaveArticlePicture`,image);
  }
  addArticle(article:Article)
  {
    return this.httpClient.post(this.apiUrl,article);
  }

  updateArticle(id:number,article:Article)
  {
    return this.httpClient.put(`${this.apiUrl}/${id}`,article);
  }

  deleteArticle(id:number)
  {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }

}
