import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuCategoryComponent } from './menu-category/menu-category.component';
import { PageTitleComponent } from './page-title/page-title.component';
import{NgxPaginationModule} from 'ngx-pagination';
import { ArticlesComponent } from './articles/articles.component';
import { UrlformatPipe } from '../Pipes/urlformat.pipe';
import { MenuArticleMostViewComponent } from './menu-article-most-view/menu-article-most-view.component';
import { MenuArchiveComponent } from './menu-archive/menu-archive.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialModule } from '../modules/material/material.module';
import { ListCommentsComponent } from './list-comments/list-comments.component';


@NgModule({
  declarations: [
    MenuCategoryComponent,
    PageTitleComponent,
    ArticlesComponent,
    UrlformatPipe,
    MenuArticleMostViewComponent,
    MenuArchiveComponent,
    AddCommentComponent,
    ListCommentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MaterialModule

  ],
  exports:[MenuCategoryComponent,PageTitleComponent,ArticlesComponent,UrlformatPipe,MenuArticleMostViewComponent,MenuArchiveComponent,AddCommentComponent,ListCommentsComponent]
})
export class ComponentsModule { }
