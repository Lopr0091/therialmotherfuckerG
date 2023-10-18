import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private username: string = '';
  private password: string = ''; // Agrega la contraseña

  setUsername(username: string) {
    this.username = username;
  }

  getUsername(): string {
    return this.username;
  }

  setPassword(password: string) { // Agrega un método para establecer la contraseña
    this.password = password;
  }

  getPassword(): string { // Agrega un método para obtener la contraseña
    return this.password;
  }
  verificarLogin(username: string,password: string):boolean{
    return username === this.getUsername() && password === this.getPassword();
  }

  constructor() { }
}
