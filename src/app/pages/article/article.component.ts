import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Category } from 'src/app/models/category';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  constructor(public articleService:ArticleService,private route:ActivatedRoute){

  }
  article:Article;
  category:Category;
  loading:boolean;

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.articleService.loading=true;
      let id=Number(this.route.snapshot.paramMap.get("id"));
      this.articleService.getArticlesById(id).subscribe(data=>{
        this.article=data;
        this.category=data.category;
        this.articleService.articleViewCountUp(this.article.id).subscribe();
      });

    });




  }

}
