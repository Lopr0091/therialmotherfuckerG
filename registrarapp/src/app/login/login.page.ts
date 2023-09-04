import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public username: string = ''; // Inicialización de propiedades
  public password: string = '';

  constructor(private router: Router, private AuthService: AuthService, private alertController: AlertController) {}
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
      // Verificar que el nombre de usuario tenga un largo adecuado
      if (this.username.length < 3 || this.username.length > 8) {
        console.log('Nombre de usuario debe tener entre 3 y 8 caracteres');
        return;
      }

      // Verificar las credenciales (esto es solo un ejemplo)
      if (this.username === 'usuario' && this.password === 'contraseña') {
        // Inicio de sesión exitoso, navegar a otra página
        this.AuthService.setUsername(this.username);
        this.router.navigateByUrl('/home');
      } else {
        // Inicio de sesión fallido, mostrar mensaje de error o tomar otra acción
        console.log('Credenciales inválidas');
        this.presentAlert()
      }
    }


  ngOnInit() {
  }

}
