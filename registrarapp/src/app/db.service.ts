import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private usuario: any[]=[];
  private asignatura: any[]=[];
  constructor() { }

  createUser(id: number, nombre: string, clave: string, correo: string){
    const usuario={id, nombre, clave, correo };
    this.usuario.push(usuario);
  }
  
}
