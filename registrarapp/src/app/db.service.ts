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
  getUserById(id: number){
    return this.usuario.find(usuario=>usuario.id===id);
  }
  updateUser(id: number, nombre: string, clave: string, correo: string){
    const usuarioIndex=this.usuario.findIndex(usuario=>usuario.id===id);
    if(usuarioIndex !== -1){
      this.usuario[usuarioIndex]={id, nombre, clave, correo};
    }
  }
  deleteUser(id: number){
    this.usuario=this.usuario.filter(usuario=>usuario.id !==id);
  }
}
