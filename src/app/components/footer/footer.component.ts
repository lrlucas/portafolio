import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  anio:number = new Date().getFullYear();

  constructor(public info:InformacionService) { }

  ngOnInit() {
  }

}
