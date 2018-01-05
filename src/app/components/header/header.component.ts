import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(public info:InformacionService,
              public router:Router) { }

  buscar_texto(termino:string){
    // console.log(termino)
    this.router.navigate(['buscar',termino])
  }

  ngOnInit() {
  }

}
