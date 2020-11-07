import { EventEmitter, Injectable } from '@angular/core';
import { SimpleService } from './simple.services';

@Injectable()
export class UserService{

    users = [   {nombre: "aldo", apellido: "mendoza"}, 
                {nombre: "daniel", apellido: "morales"}
            ];

    constructor(private simpleService:SimpleService){}
    
    triggerAlert = new EventEmitter<string>();

    addUser(newUser : {nombre:string, apellido:string }){
        this.users.push(newUser);
        this.simpleService.UserStatus(newUser.nombre,"created");
    }
}