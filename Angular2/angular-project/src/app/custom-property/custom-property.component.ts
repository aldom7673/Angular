import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-property',
  templateUrl: './custom-property.component.html',
  styleUrls: ['./custom-property.component.css']
})
export class CustomPropertyComponent implements OnInit {
  @Input("userAlias") user : {nombre:string, apellido:string}
  
  constructor() { 
  }

  ngOnInit(): void {
  }

}
