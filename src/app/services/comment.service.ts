import { Injectable } from '@angular/core';
import { Comment } from '../models/comment';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl:string="https://localhost:7146/api/comments/PostComment";
  private apiurl2:string="https://localhost:7146/api/comments/GetCommentList";
  loading:boolean;
  constructor(private httpClient:HttpClient) { }

  addComment(comment:Comment)
  {
      this.loading=true;
      return this.httpClient.post(this.apiUrl,comment).pipe(tap(t=>{
        this.loading=false;
      }));

  }

  commentList(id:number)
  {
    return this.httpClient.get<Comment[]>(`${this.apiurl2}/${id}`);
  }

}
