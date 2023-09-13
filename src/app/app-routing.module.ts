import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path:'home',component:HomeComponent,children:[
        {path:'home1',component:Home1Component},
        {path:'home2',component:Home2Component}]
  },
  {
    path:'blog',component:BlogComponent
  }
  ,
  {
    path:'contact',component:ContactComponent
  }
  ,
  {
    path:'about',component:AboutComponent
  }
  ,
  {
    path:'portfolio',component:PortfolioComponent
  },
  {
    path:'footer',component:FooterComponent
  }
  ,{
    path:'**',component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
