import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './src/app/pages/home/home.component';
import { AboutMeComponent } from './src/app/pages/about-me/about-me.component';
import { ContactComponent } from './src/app/pages/contact/contact.component';
import { MainLayoutComponent } from './src/app/layout/main-layout/main-layout.component';
import { AdminLayoutComponent } from './src/app/layout/admin-layout/admin-layout.component';
import { ArticleComponent } from './src/app/pages/article/article.component';
import { CategoryArticlesComponent } from './src/app/pages/category-articles/category-articles.component';
import { SearchComponent } from './src/app/pages/search/search.component';
import { ArchiveComponent } from './src/app/pages/archive/archive.component';
import { AdminHomeComponent } from './src/app/admin-pages/admin-home/admin-home.component';
import { AdminArticleComponent } from './src/app/admin-pages/article/admin-article/admin-article.component';
import { AdminArticleListComponent } from './src/app/admin-pages/article/admin-article-list/admin-article-list.component';
import { AdminArticleUpdateComponent } from './src/app/admin-pages/article/admin-article-update/admin-article-update.component';
import { AdminArticleInsertComponent } from './src/app/admin-pages/article/admin-article-insert/admin-article-insert.component';
import { AdminLoginComponent } from './src/app/pages/admin-login/admin-login.component';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

const routes: Routes = [
{
  path:"",
  component:MainLayoutComponent,
  children:[
    {
      path:"",
      component:HomeComponent
    },
    {
      path:"hakkimizda",
      component:AboutMeComponent
    },
    {
      path:"makale/:title/:id",
      component:ArticleComponent
    },
    {
      path:"kategori/:name/:id",
      component:CategoryArticlesComponent
    },
    {
      path:"kategori/:name/:id/sayfa/:page",
      component:CategoryArticlesComponent
    },
    {
      path:"iletisim",
      component:ContactComponent
    },
    {
      path:"sayfa/:page",
      component:HomeComponent
    }
    ,
    {
      path:"arsiv/:year/:month",
      component:ArchiveComponent
    }
    ,
    {
      path:"arsiv/:year/:month/sayfa/:page",
      component:ArchiveComponent
    }
    ,
    {
      path:"arama/sayfa/:page",
      component:SearchComponent
    },
    {
      path:"adminlogin",
      component:AdminLoginComponent
    }
  ]
},
{
  path:"admin",
  component:AdminLayoutComponent,
  canActivate:[AuthGuardService],
  children:[
    {
      path:"",
      component:AdminHomeComponent
    },
    {
      path:"admin-anasayfa",
      component:AdminHomeComponent
    }
    ,
    {
      path:"makale",
      component:AdminArticleComponent,
      children:[
        {
          path:"liste",
          component:AdminArticleListComponent
        },
        {
          path:"guncelle/:id",
          component:AdminArticleUpdateComponent
        },
        {
          path:"ekle",
          component:AdminArticleInsertComponent
        }
      ]
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
