import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../usuario.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private usuarioService: UsuarioService) { }
  getUsername(): string{
    return this.usuarioService.getUsername();
  }
  ngOnInit() {
  }

}
