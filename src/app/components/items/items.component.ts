import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductosService } from "../../services/productos.service";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styles: []
})
export class ItemsComponent implements OnInit {

  producto:any = undefined;
  cod:string = undefined;

  constructor(public router:ActivatedRoute,
              private productoService:ProductosService) {
    router.params
      .subscribe(parametros=>{

        productoService.cargar_producto(parametros['id'])
          .subscribe(value=>{
            this.cod = parametros['id'];
            this.producto = value;
          })

      })
  }

  ngOnInit() {
  }

}
