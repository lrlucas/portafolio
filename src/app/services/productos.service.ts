import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ProductosService {

  productos:any = [];
  cargando:boolean = true;

  constructor(public http:HttpClient) {
    this.cargar_productos();

  }

  public cargar_producto(cod:string){
    return this.http.get(`https://templatepaginaweb.firebaseio.com/productos/${cod}.json`)
  }


  public cargar_productos(){
    if(this.productos.length === 0){
      this.http.get('https://templatepaginaweb.firebaseio.com/productos_idx.json')
        .subscribe(value=>{
          setTimeout(()=>{
            this.cargando = false;
            this.productos = value;
          },1000);
        })
    }
  }


}
