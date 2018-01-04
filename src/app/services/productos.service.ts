import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ProductosService {

  productos:any = [];
  cargando:boolean = true;

  constructor(public http:HttpClient) {
    this.cargar_productos();

  }

  public cargar_productos(){
    if(this.productos.length === 0){
      this.http.get('https://templatepaginaweb.firebaseio.com/productos_idx.json')
        .subscribe(value=>{
          this.cargando = false;
          this.productos = value;
          console.log(value)
        })
    }
  }

}
