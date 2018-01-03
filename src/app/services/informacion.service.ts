import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformacionService {

  info:any={};
  loading:boolean = false;

  constructor(public http:Http) {
    http.get('assets/data/info.pagina.json')
      .subscribe(value=>{
        this.loading = true;
        console.log(value.json());
        this.info = value.json();
      });
  }

}
