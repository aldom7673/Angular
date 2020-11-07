import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, ContentChild, AfterContentInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-generator',
  templateUrl: './user-generator.component.html',
  styleUrls: ['./user-generator.component.css'],
  providers:[]
})
export class UserGeneratorComponent implements OnInit, AfterContentInit {
  @Output('uCreatd') userCreated = new EventEmitter<{nombre:string, apellido:string}>();
  @ViewChild("nameReferenes",{static:true}) nameContentInput :ElementRef;
  @ContentChild("pReference",{static:true}) paragraph :ElementRef;

  user = {nombre:"", apellido:""};
  nombre="";
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    console.log('Text Content of paragraph:' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentInit(){
    console.log('Text Content of paragraph:' + this.paragraph.nativeElement.textContent);
  }
  
  createUser(){
    this.userService.addUser({nombre:this.nameContentInput.nativeElement.value, apellido:this.user.apellido})
    this.userService.triggerAlert.emit("Subscribe text");
    // this.userCreated.emit({
    //   nombre:this.nameContentInput.nativeElement.value,
    //   apellido:this.user.apellido
    // });
  }
}
