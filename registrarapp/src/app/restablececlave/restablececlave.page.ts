import { Component, OnInit } from '@angular/core';
import {UsuarioService} from'../usuario.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-restablececlave',
  templateUrl: './restablececlave.page.html',
  styleUrls: ['./restablececlave.page.scss'],
})
export class RestablececlavePage implements OnInit {
  public username: string = '';

  constructor(private router: Router,  
    private alertController: AlertController,
    private usuarioService: UsuarioService,
    public toastController: ToastController) { }
    
    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Error',
        subHeader: 'Correo no encontrado',
        message: 'Correo del usuario es incorrecto,ingrese un correo existente',
        buttons: ['OK'],
      });
      await alert.present();
    }
    volverlogin(){
      this.router.navigate(['/login'])
    }
    async mostrarToast() {
      const toast = await this.toastController.create({
        message: 'Se envio a tu correo el cambio de contraseña',
        duration: 4000, // Duración en milisegundos
        position: 'bottom', 
      });
      toast.present();
    }
  EnvioCorreo() {
    
    if (this.username === 'User@duocuc.cl') {
      this.usuarioService.setUsername(this.username);
      this.mostrarToast();
      this.router.navigateByUrl('/login');
    } else {
      console.log('Credenciales inválidas');
      this.presentAlert()
    }
  }
  ngOnInit() {
  }

}
