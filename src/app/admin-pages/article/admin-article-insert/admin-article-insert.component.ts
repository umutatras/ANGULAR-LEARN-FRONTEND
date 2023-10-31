import { Component,OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import{FormGroup,FormControl,Validator,AbstractControl, Validators} from "@angular/forms";
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';
import { Router } from "@angular/router";
import * as DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import { MyvalidationService } from 'src/app/services/myvalidation.service';


@Component({
  selector: 'app-admin-article-insert',
  templateUrl: './admin-article-insert.component.html',
  styleUrls: ['./admin-article-insert.component.css']
})
export class AdminArticleInsertComponent implements OnInit {

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

  constructor(public articleService:ArticleService,public categoryService:CategoryService,public mmyvalidation:MyvalidationService,private route:Router){

  }


  ngOnInit(){
    this.getCategory();
    this.articleForm=new FormGroup({
title:new FormControl("makale 1 ",Validators.required),
contentSummary:new FormControl("makale özet 1",Validators.required),
contentMain:new FormControl("makale içeriği 1 ",Validators.required),
category:new FormControl(""),
picture:new FormControl("")
    });


  }

  get getControls() {
    return this.articleForm.controls;
  }
  displayCategoryName(category: { name: any; })
  {
    return category.name;
  }

  onSubmit(){
    if(this.articleForm.valid)
    {
      this.loading=true;
      this.articleService.addArticle(this.articleForm.value).subscribe(result=>{
        this.success=true;
        this.route.navigateByUrl("/admin/makale/liste");

      },error=>{
        this.success=false;
        this.info="bir hata meydana geldi:";
        console.log(error);
      });
    }
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
