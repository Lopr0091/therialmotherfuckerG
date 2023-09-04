import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private username: string= '';
  setUsername(username: string){
    this.username=username;
  }
  getUsername(): string{
    return this.username;
  }
  constructor() { }

}
