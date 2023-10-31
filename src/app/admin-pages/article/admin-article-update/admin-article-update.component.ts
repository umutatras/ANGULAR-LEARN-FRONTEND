import { Component } from '@angular/core';
import{FormGroup,FormControl,Validator,AbstractControl, Validators} from "@angular/forms";
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from "@angular/router";
import * as DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import { MyvalidationService } from 'src/app/services/myvalidation.service';
import { ArticleService } from 'src/app/services/article.service';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';



@Component({
  selector: 'app-admin-article-update',
  templateUrl: './admin-article-update.component.html',
  styleUrls: ['./admin-article-update.component.css']
})
export class AdminArticleUpdateComponent {
  public Editor:any = DecoupledEditor;
  public onReady(editor) {
    editor.ui
      .getEditableElement()
      .parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
      );
  }

  fileData:File;
  picture:string;
  articleForm:FormGroup;
  success:boolean;
  loading:boolean;
  info:string;
  categories:Category[];
  articleId:number;
  constructor(public articleService:ArticleService,private router:ActivatedRoute,public categoryService:CategoryService,public mmyvalidation:MyvalidationService,private route:Router){

  }
  ngOnInit(){
    this.getCategory();
    this.articleForm=new FormGroup({
title:new FormControl("",Validators.required),
contentSummary:new FormControl("",Validators.required),
contentMain:new FormControl("",Validators.required),
category:new FormControl(""),
picture:new FormControl("")
    });

    this.articleId=Number(this.router.snapshot.paramMap.get("id"));
    this.articleService.getArticlesById(this.articleId).subscribe(result=>{
        this.picture=result.picture;
        this.getControls.title.setValue(result.title);
        this.getControls.contentSummary.setValue(result.summaryContent);
        this.getControls.contentMain.setValue(result.content);
        this.getControls.category.setValue(result.category);
    });

  }

  onSubmit(){
    if(this.articleForm.valid)
    {
      this.loading=true;
      this.articleService.updateArticle(this.articleId,this.articleForm.value).subscribe(result=>{
        this.success=true;
        this.route.navigateByUrl("/admin/makale/liste");

      },error=>{
        this.success=false;
        this.info="bir hata meydana geldi:";
        console.log(error);
      });
    }
  }
  get getControls() {
    return this.articleForm.controls;
  }
  displayCategoryName(category: { name: any; })
  {
    return category.name;
  }

  getCategory(){
    return this.categoryService.getCategories().subscribe(result=>{
      this.categories=result;
    });
  }
  upload(files:any)
  {
    this.fileData=files.target.files[0];
    let formData=new FormData();
    formData.append("picture",this.fileData);
    this.articleService.saveArticlePicture(formData).subscribe(result=>{
      this.picture=result.path;
      this.articleForm.controls.picture.setValue(this.picture);
    });

  }


}
