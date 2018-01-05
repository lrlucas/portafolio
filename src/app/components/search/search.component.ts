import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductosService } from "../../services/productos.service";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  termino:string = undefined;
  constructor(public router:ActivatedRoute,
              public productosService:ProductosService) {
    router.params
      .subscribe(parametros=>{
        this.termino = parametros['termino']
        productosService.buscar_producto(this.termino)
      });
  }

  ngOnInit() {
  }

}
