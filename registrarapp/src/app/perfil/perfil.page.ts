import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../usuario.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private usuarioService: UsuarioService,
    private router: Router) { }
  getUsername(): string{
    return this.usuarioService.getUsername();
  }
  ngOnInit() {
  }

}
