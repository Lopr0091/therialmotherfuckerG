import { Injectable } from '@angular/core';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private dbService: DbService) { }
  insertUser(id: number, nombre: string, clave: string, correo: string) {
    this.dbService.createUser(id, nombre, clave, correo);
  }
}
