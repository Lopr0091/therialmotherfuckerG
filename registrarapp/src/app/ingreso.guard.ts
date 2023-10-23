import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, NavigationExtras } from '@angular/router';
import { UsuarioService } from './usuario.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IngresoGuard implements CanActivate {
  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    const username = this.usuarioService.getUsername();
    const password = this.usuarioService.getPassword();
    const storedUsername = localStorage.getItem('storedUsername');
    const storedPassword = localStorage.getItem('storedPassword');
    
    if (this.usuarioService.verificarLogin(username, password)) {
      console.log('Acceso permitido');
      return true;
    } else {
      this.router.navigate(['/login']);
      console.log('no se pudo');
      return false;
    }
  }
}
