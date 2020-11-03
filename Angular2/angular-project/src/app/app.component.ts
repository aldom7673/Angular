import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';
  name = 'Aldo';

  users = [ {nombre: "aldo", apellido: "mendoza"}, 
            {nombre: "daniel", apellido: "morales"}
          ];

  addUser(userData:{nombre:string, apellido:string}){
    this.users.push({
      nombre:userData.nombre,
      apellido:userData.apellido
    });
  }
}
