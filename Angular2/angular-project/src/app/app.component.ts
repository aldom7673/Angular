import { Component } from '@angular/core';
import { SimpleService } from './services/simple.services';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // providers: [SimpleService]
})
export class AppComponent {
  title = 'angular-project';
  name = 'Aldo';
  users : {nombre:string, apellido:string}[] = [];

  constructor(private simpleService : SimpleService, 
              private userService : UserService){
    this.users = userService.users;
    
    this.userService.triggerAlert.subscribe(
      (message:string) => alert(message)
    );
  }

  // addUser(userData:{nombre:string, apellido:string}){
  //   this.users.push({
  //     nombre:userData.nombre,
  //     apellido:userData.apellido
  //   });
  //   this.simpleService.UserStatus(userData.nombre,"created");
  // }
}
