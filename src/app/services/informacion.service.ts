import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformacionService {

  info:any={};
  loading:boolean = false;
  loading_about:boolean = false;
  equipo:any[] = [];

  constructor(public http:Http) {

    this.carga_info();
    this.carga_sobre_nosotros();

  }

  public carga_info(){
    this.http.get('assets/data/info.pagina.json')
      .subscribe(value=>{
        this.loading = true;
        this.info = value.json();
      });
  }

  public carga_sobre_nosotros(){
    this.http.get('https://templatepaginaweb.firebaseio.com/equipo.json')
      .subscribe(value=>{
        console.log(value.json())
        this.loading_about = true;
        this.equipo = value.json();
      });

  }

}
