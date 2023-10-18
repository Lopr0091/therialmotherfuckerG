import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UsuarioService } from '../usuario.service';
import { ToastController } from '@ionic/angular';
import { IngresoGuard } from '../ingreso.guard';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public username: string = '';
  public password: string = '';

  constructor(private router: Router,
    private alertController: AlertController,
    private usuarioService: UsuarioService,
    public IngresoGuard: IngresoGuard,
    public toastController: ToastController) { }
  irRestablececlave() {
    this.router.navigate(['/restablececlave'])
  }
  async mostrarToast() {
    const toast = await this.toastController.create({
      message: 'Inicio correctamente',
      duration: 2000, //Son milisegundos
      position: 'bottom', 
    });
    toast.present();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      subHeader: 'Datos erroneos',
      message: 'Usuario/Clave son incorrectos,ingrese los datos correctos.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  iniciarSesion(){
    const username = this.username;
    const password = this.password;
    this.usuarioService.setUsername(username);
    this.usuarioService.setPassword(password);
    if (this.usuarioService.verificarLogin(username, password)) {
      this.router.navigate(['/home']);
    } else {
        console.log('Acceso denegado login');
        this.presentAlert();
    }
  }
  ngOnInit() {

  }
}
