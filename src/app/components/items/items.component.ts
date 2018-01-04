import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styles: []
})
export class ItemsComponent implements OnInit {

  constructor(public router:ActivatedRoute) {
    router.params
      .subscribe(parametros=>{
        console.log(parametros['id'])
      })
  }

  ngOnInit() {
  }

}
