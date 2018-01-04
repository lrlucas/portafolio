import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class InformacionService {

  info:any={};
  loading:boolean = false;
  loading_about:boolean = false;
  equipo:any;

  constructor(public http:HttpClient) {

    this.carga_info();
    this.carga_sobre_nosotros();

  }

  public carga_info(){
    this.http.get('assets/data/info.pagina.json')
      .subscribe(value=>{
        this.loading = true;
        this.info = value;
      });
  }

  public carga_sobre_nosotros(){
    this.http.get('https://templatepaginaweb.firebaseio.com/equipo.json')
      .subscribe(value=>{
        this.loading_about = true;
        this.equipo = value;
      });

  }

}
