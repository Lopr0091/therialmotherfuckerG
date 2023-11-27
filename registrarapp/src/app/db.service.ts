import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  constructor() { }

  createUser(id: number, nombre: string, clave: string, correo: string) {
    const usuario = { id, nombre, clave, correo };
    const usuarios = this.getUsuariosFromLocalStorage();
    usuarios.push(usuario);
    this.saveUsuariosToLocalStorage(usuarios);
  }

  getUserById(id: number) {
    const usuarios = this.getUsuariosFromLocalStorage();
    return usuarios.find((usuario: Usuario) => usuario.id === id);
  }
  getUserByName(nombre: string): Usuario | undefined {
    const usuarios = this.getUsuariosFromLocalStorage();
    return usuarios.find((usuario: Usuario) => usuario.nombre === nombre);
  }
  updateUser(id: number, nombre: string, clave: string, correo: string) {
    const usuarios = this.getUsuariosFromLocalStorage();
    const usuarioIndex = usuarios.findIndex((usuario: Usuario) => usuario.id === id);
    if (usuarioIndex !== -1) {
      usuarios[usuarioIndex] = { id, nombre, clave, correo };
      this.saveUsuariosToLocalStorage(usuarios);
    }
  }

  deleteUser(id: number) {
    const usuarios = this.getUsuariosFromLocalStorage();
    const updatedUsuarios = usuarios.filter((usuario: Usuario) => usuario.id !== id);
    this.saveUsuariosToLocalStorage(updatedUsuarios);
  }

  private getUsuariosFromLocalStorage() {
    const usuariosStr = localStorage.getItem('usuarios');
    return usuariosStr ? JSON.parse(usuariosStr) : [];
  }

  private saveUsuariosToLocalStorage(usuarios: any[]) {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }
}
interface Usuario{
  id: number;
  nombre: string;
  clave: string;
  correo: string;
}