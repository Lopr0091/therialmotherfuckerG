import { Injectable } from '@angular/core';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private dbService: DbService) {}
  usuarios: any[] = [];
  llenar() {
    const id: number = 2;
    const nombre: string = 'NombreUsuario2';
    const clave: string = 'clave2';
    const correo: string = 'correo1@ejemplo.com';
  
    // Verificar si el usuario ya existe antes de insertarlo
    if (!this.dbService.getUserById(id)) {
      this.dbService.createUser(id, nombre, clave, correo);
      console.log('Usuario creado: ', this.dbService.getUserById(1));
    } else {
      console.log('El usuario ya existe');
    }
  }
  

  ver() {
    this.usuarios = [];
    for (let id = 1; ; id++) {
      const usuario = this.dbService.getUserById(id);
      if (!usuario) {
        break;
      }
      this.usuarios.push(usuario);
    }
  }
  
}

