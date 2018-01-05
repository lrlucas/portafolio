import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ProductosService {

  productos:any = [];
  productos_filtrados:any = [];
  cargando:boolean = true;

  constructor(public http:HttpClient) {
    this.cargar_productos();

  }

  public buscar_producto(termino:string){
    console.log('buscando producto')
    console.log(this.productos.length)
    if(this.productos.length === 0){
      this.cargar_productos().then(()=>{
        //termino la cargar
        this.filtar_productos(termino)
      })
    }else {
      this.filtar_productos(termino)
    }


  }


  private filtar_productos(termino:string){

    this.productos_filtrados= [];
    termino = termino.toLowerCase();

    this.productos.forEach(prod=>{

      if( prod.categoria.indexOf(termino) >=0 || prod.titulo.toLowerCase().indexOf(termino) >=0){
        this.productos_filtrados.push(prod)

        console.log(prod)

      }

    })

  }

  public cargar_producto(cod:string){
    return this.http.get(`https://templatepaginaweb.firebaseio.com/productos/${cod}.json`)
  }


  public cargar_productos(){

    let promesa = new Promise((resolve,reject)=>{

      this.http.get('https://templatepaginaweb.firebaseio.com/productos_idx.json')
        .subscribe(value=>{
          // setTimeout(()=>{
            this.cargando = false;
            this.productos = value;
          // },1000);
          resolve();
        });

    });
    return promesa;




  }


}
