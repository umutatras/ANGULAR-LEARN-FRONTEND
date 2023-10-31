import { Component ,OnInit,Input} from '@angular/core';
import { Article } from 'src/app/models/article';
import {ActivatedRoute,Route,Router} from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  @Input() totalCount:number;
  @Input() articles:Article[];
  @Input() page:number;
  @Input() pageSize:number;
  @Input() loadingItem:number;
  @Input() typeList:string;
  default_article:string="assets/articleempty.png";
 constructor(private router:Router,private route:ActivatedRoute,public articleService:ArticleService){

 }
 createRange(number:number)
 {
  var items:number[]=[];
  for(var i=1;i<=number;i++)
  {
    items.push(i);
  }
  return items;
 }
 ngOnInit(){
  this.articleService.loading=true;
 }

 pageChanged(event:any){
  this.articleService.loading = true;
  this.page=event;
  switch(this.typeList)
  {
    case "home":
      this.router.navigateByUrl(`/sayfa/${this.page}`);
      break;
      case "category":
        let categoryName=this.route.snapshot.paramMap.get("name");
        let categoryId=this.route.snapshot.paramMap.get("id");
        this.router.navigateByUrl(`/kategori/${categoryName}/${categoryId}/sayfa/${this.page}`);
      break;
      case "search":
        let searchText=this.route.snapshot.queryParamMap.get("s");
        this.router.navigateByUrl(`/arama/${this.page}/?s=${searchText}`);
      break;
      case "archive":
        let year=this.route.snapshot.paramMap.get("year");
        let month=this.route.snapshot.paramMap.get("month");
        this.router.navigateByUrl(`/arsiv/${year}/${month}/sayfa/${this.page}`);
      break;

      default:
        break;
  }

 }
}
