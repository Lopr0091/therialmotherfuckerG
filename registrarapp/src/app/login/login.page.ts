import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import {UsuarioService} from'../usuario.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public username: string = ''; // Inicialización de propiedades
  public password: string = '';

  constructor(private router: Router,  
    private alertController: AlertController,
    private usuarioService: UsuarioService) {}
    irHome(){
      this.router.navigate(['/home'])
    }
    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: 'Important message',
        message: 'This is an alert!',
        buttons: ['OK'],
      });

      await alert.present();
    }
    iniciarSesion() {
      if (this.username.length < 3 || this.username.length > 8) {
        console.log('Nombre de usuario debe tener entre 3 y 8 caracteres');
        return;
      }
      if (this.username === 'usuario' && this.password === 'contraseña') {
        this.usuarioService.setUsername(this.username);
        this.router.navigateByUrl('/inicio');
      } else {
        console.log('Credenciales inválidas');
        this.presentAlert()
      }
    }


  ngOnInit() {
  }

}
