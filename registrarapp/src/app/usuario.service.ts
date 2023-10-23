import { Injectable } from '@angular/core';
interface Usuario {
  id: number;
  nombre: string;
  clave: string;
  correo: string;
}
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor() {}

  getUsername(): string {
    const storedUsers = this.getStoredUsers();
    if (storedUsers.length > 0) {
      return storedUsers[0].nombre || '';
    }
    return '';
  }
  
  getPassword(): string {
    const storedUsers = this.getStoredUsers();
    if (storedUsers.length > 0) {
      return storedUsers[0].clave || '';
    }
    return '';
  }
  getCorreo(): string {
    const storedUsers = this.getStoredUsers();
    if (storedUsers.length > 0) {
      return storedUsers[0].correo || '';
    }
    return '';
  }
  
  verificarLogin(username: string, password: string): boolean {
    const storedUsers = this.getStoredUsers();
    if (storedUsers.length > 0) {
      return username === storedUsers[0].nombre && password === storedUsers[0].clave;
    }
    return false;
  }
  
  private getStoredUsers(): Usuario[] {
    const usuariosStr = localStorage.getItem('usuarios');
    return usuariosStr ? JSON.parse(usuariosStr) : [];
  }
}  
