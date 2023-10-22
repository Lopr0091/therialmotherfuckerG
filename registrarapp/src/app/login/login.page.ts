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
  

  iniciarSesion(){
    const username = this.username;
    const password = this.password;
    this.usuarioService.setUsername(username);
    this.usuarioService.setPassword(password);
    if (this.usuarioService.verificarLogin(username, password)) {
      this.router.navigate(['/inicio']);
    } else {
        console.log('Acceso denegado login');
        
    }
  }
  ngOnInit() {

  }
}
