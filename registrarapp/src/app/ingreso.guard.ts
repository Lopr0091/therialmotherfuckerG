import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, NavigationExtras, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class IngresoGuard implements CanActivate {
  constructor(private router: Router, private usuarioService: UsuarioService,public toastController: ToastController,public AlertController: AlertController) {}

  async mostrarToast() {
    const toast = await this.toastController.create({
      message: 'Inicio correctamente',
      duration: 2000, //Son milisegundos
      position: 'bottom', 
    });
    toast.present();
  }
  async presentAlert() {
    const alert = await this.AlertController.create({
      subHeader: 'Datos erroneos',
      message: 'Usuario/Clave son incorrectos,ingrese los datos correctos.',
      buttons: ['OK'],
    });
    await alert.present();
  }
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
      this.presentAlert();
      this.router.navigate(['/login']);
      return false;
    }
  }
}