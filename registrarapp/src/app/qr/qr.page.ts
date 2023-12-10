import { Component, OnDestroy } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { ElementRef, Renderer2 } from '@angular/core';
import { AlertController } from '@ionic/angular'; // Importa el AlertController

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnDestroy {
  qrCodeString = 'This is a secret qr code message';
  scannedResult: any;
  content_visibility = '';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private alertController: AlertController // Agrega el AlertController
  ) {}

  async checkPermission() {
    try {
      // check or request permission
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        // the user granted permission
        return true;
      }
      return false;
    } catch (e) {
      console.log(e);
      return;
    }
  }

  async startScan() {
    try {
      const permission = await this.checkPermission();
      if (!permission) {
        return;
      }
      await BarcodeScanner.hideBackground();
      this.renderer.addClass(document.body, 'scanner-active');
      this.content_visibility = 'hidden';
      const result = await BarcodeScanner.startScan();
      console.log(result);
      BarcodeScanner.showBackground();
      this.renderer.removeClass(document.body, 'scanner-active');
      this.content_visibility = '';
      if (result?.hasContent) {
        this.scannedResult = result.content;
        console.log(this.scannedResult);

        // Realiza la validación del resultado escaneado
        if (this.scannedResult === 'Duoc:Programacion_de_aplicaciones_moviles:8:31 AM - 10:40 AM') {
          // Muestra el resultado si la validación es exitosa
          this.showResult();
        } else {
          // Muestra un mensaje emergente si la validación falla
          this.showErrorMessage();
        }
      }
    } catch (e) {
      console.log(e);
      this.stopScan();
    }
  }

  stopScan() {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    this.renderer.removeClass(document.body, 'scanner-active');
    this.content_visibility = '';
  }

  async showResult() {
    const alert = await this.alertController.create({
      header: 'Asistencia asignada',
      message: 'El código QR fue escaneado correctamente.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async showErrorMessage() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'El código QR no fue posible asignar la asistencia.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnDestroy(): void {
    this.stopScan();
  }
}
