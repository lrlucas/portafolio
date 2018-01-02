import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent,ItemsComponent,PortafolioComponent } from "./components/index.paginas";



@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'home', component:PortafolioComponent },
      { path: 'about', component: AboutComponent },
      { path: 'product', component: ItemsComponent },
      { path: '**', pathMatch: 'full', redirectTo:'home' }
    ],{useHash:true})
  ],
  exports: [
    RouterModule
  ]
})

export class RoutingModule { }
