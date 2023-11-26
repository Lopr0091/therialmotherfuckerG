import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { ToastController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public username: string = '';
  public password: string = '';

  constructor(private router: Router, 
    private usuarioService: UsuarioService,
  public toastController: ToastController,
  public alertController: AlertController) {}
  async mostrarToast() {
    const toast = await this.toastController.create({
      message: 'Inicio correctamente',
      duration: 2000, // Son milisegundos
      position: 'bottom',
    });
    toast.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      subHeader: 'Datos erroneos',
      message: 'Usuario/Clave son incorrectos, ingrese los datos correctos.',
      buttons: ['OK']
    });
    await alert.present();
  }

  iniciarSesion() {
    const username = this.username;
    const password = this.password;
  
    if (this.usuarioService.verificarLogin(username, password)) {
      console.log('ingresado login');
      this.router.navigate(['/inicio']);
    } else {
      this.presentAlert();
      console.log('Acceso denegado login');
    }
  }
  irRestablececlave() {
    this.router.navigate(['/qr']);
  }

  ngOnInit() {}
}
