import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent,ItemsComponent,PortafolioComponent,SearchComponent } from "./components/index.paginas";



@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'home', component:PortafolioComponent },
      { path: 'about', component: AboutComponent },
      { path: 'product/:id', component: ItemsComponent },
      { path: 'buscar/:termino', component: SearchComponent},
      { path: '**', pathMatch: 'full', redirectTo:'home' }
    ],{useHash:true})
  ],
  exports: [
    RouterModule
  ]
})

export class RoutingModule { }
