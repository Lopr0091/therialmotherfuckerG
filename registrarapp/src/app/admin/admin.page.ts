import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  usuarios: any[] = [];
  nombreUsuario: string = '';
  nuevaClave: string = '';

  constructor(private dbService: DbService, private alertController: AlertController,private router: Router) {}

  async cambiarContrasena() {
    // Obtén el nombre de usuario y la nueva contraseña desde el formulario
    const nombreUsuario = this.nombreUsuario;
    const nuevaClave = this.nuevaClave;

    // Obtener el usuario por nombre de usuario
    const usuario = this.dbService.getUserByName(nombreUsuario);

    if (usuario) {
      // Realizar cambios en el usuario si es necesario
      usuario.clave = nuevaClave; // Usa la nueva contraseña ingresada en el formulario

      // Actualizar la contraseña del usuario
      this.dbService.updateUser(usuario.id, usuario.nombre, usuario.clave, usuario.correo);

      console.log(`Contraseña cambiada para ${nombreUsuario}. Nueva contraseña: ${nuevaClave}`);

      // Mostrar una alerta de éxito
      const alertExito = await this.alertController.create({
        header: 'Éxito',
        message: 'Contraseña cambiada con éxito.',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              // Navegar a la página de login después de presionar OK
              this.router.navigate(['/login']);
            }
          }
        ]
      });
      await alertExito.present();
    } else {
      // Mostrar una alerta en caso de que el usuario no exista
      const alertError = await this.alertController.create({
        header: 'Error',
        message: 'El usuario no existe en la base de datos o no se pudo cambiar la contraseña.',
        buttons: ['OK']
      });
      await alertError.present();
    }
  }

  ngOnInit() {
    // Puedes llamar a cambiarContrasena en ngOnInit si deseas que se ejecute al cargar la página
    // this.cambiarContrasena();
  }
}