import { Component,OnInit } from '@angular/core';
import { Archive } from 'src/app/models/archive';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-menu-archive',
  templateUrl: './menu-archive.component.html',
  styleUrls: ['./menu-archive.component.css']
})
export class MenuArchiveComponent implements OnInit {
  arvhive:Archive[]=[];
  constructor(public articleService:ArticleService){

  }
  ngOnInit() {

    this.articleService.getArticlesArchive().subscribe(data=>{
this.arvhive=data;
    });
  }

}
