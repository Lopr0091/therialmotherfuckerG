import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, NavigationExtras, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IngresoGuard implements CanActivate {
  constructor(private router: Router, private usuarioService: UsuarioService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const username = this.usuarioService.getUsername();
    const password = this.usuarioService.getPassword();

    if (username === 'usuario' && password === 'clave') {
      return true;
      console.log('Acceso permitido');
      const navigationExtras: NavigationExtras = {
        state: { username: username }
      };
      this.router.navigate(['/inicio'], navigationExtras);
    } else {
      console.log('Acceso denegado');
      this.router.navigate(['/login']);
      return false;
    }
  }
}