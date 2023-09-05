import { Component, OnInit } from '@angular/core';
import {UsuarioService} from'../usuario.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restablececlave',
  templateUrl: './restablececlave.page.html',
  styleUrls: ['./restablececlave.page.scss'],
})
export class RestablececlavePage implements OnInit {
  public username: string = '';

  constructor(private router: Router,  
    private alertController: AlertController,
    private usuarioService: UsuarioService) { }
    
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
  EnvioCorreo() {
    
    if (this.username === 'User@duocuc.cl') {
      this.usuarioService.setUsername(this.username);
      this.router.navigateByUrl('/login');
    } else {
      console.log('Credenciales inválidas');
      this.presentAlert()
    }
  }
  ngOnInit() {
  }

}
