import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Camera } = Plugins;

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  constructor() { }

  ngOnInit() {
    // Inicializaciones u operaciones iniciales
  }

  async ionViewDidEnter() {
    // Tu código para acceder a la cámara aquí
    await this.takePicture();
  }

  async takePicture() {
    if (Camera) {
      try {
        const image = await Camera.getPhoto({
          resultType: 'uri',
          quality: 90,
        });
        console.log(image);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error('Camera is not available');
    }
  }
}
