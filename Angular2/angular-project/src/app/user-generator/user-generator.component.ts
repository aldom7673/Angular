import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, ContentChild, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-user-generator',
  templateUrl: './user-generator.component.html',
  styleUrls: ['./user-generator.component.css']
})
export class UserGeneratorComponent implements OnInit, AfterContentInit {
  @Output('uCreatd') userCreated = new EventEmitter<{nombre:string, apellido:string}>();
  @ViewChild("nameReferenes",{static:true}) nameContentInput :ElementRef;
  @ContentChild("pReference",{static:true}) paragraph :ElementRef;

  user = {nombre:"", apellido:""};
  nombre="";
  constructor() { }

  ngOnInit(): void {
    console.log('Text Content of paragraph:' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentInit(){
    console.log('Text Content of paragraph:' + this.paragraph.nativeElement.textContent);
  }
  
  createUser(){
    this.userCreated.emit({
      nombre:this.nameContentInput.nativeElement.value,
      apellido:this.user.apellido
    });
  }
}
