import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  usuarios: any[]=[];
  constructor(private dbService: DbService) { }
  llenar(){
      const id: number=1;
      const nombre: string ='NombreUsuario1';
      const clave: string ='clave1';
      const correo: string ='correo1@ejemplo.com';

    this.dbService.createUser(id, nombre, clave, correo);
    console.log('Usuario creado: ',this.dbService.getUserById(1));
  }
  ver(){
    this.usuarios=[];
    for (let id=1; ;id++){
      const usuario = this.dbService.getUserById(id);
      if(!usuario){
        break;
      }
      this.usuarios.push(usuario);
    }
  }
  ngOnInit() {
    this.ver();
  }

}
