import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../usuario.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private usuarioService: UsuarioService,
    private router: Router) { }
  getUsername(): string{
    return this.usuarioService.getUsername();
  }
  irHorario() {
    this.router.navigate(['/horario'])
  }
  ngOnInit() {
  }

}
