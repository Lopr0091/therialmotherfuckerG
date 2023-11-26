import { Component, OnDestroy, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { ElementRef, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnDestroy {
   // https://www.npmjs.com/package/angularx-qrcode
   qrCodeString = 'This is a secret qr code message';
   scannedResult: any;
   content_visibility = '';
 
   constructor( private el: ElementRef, private renderer: Renderer2
     // private barcodeScanner: BarcodeScanner
     ) {}
 
   // startScan() {
   //   this.barcodeScanner.scan().then(barcodeData => {
   //     console.log('Barcode data', barcodeData);
   //     this.scannedResult = barcodeData?.text;
   //    }).catch(err => {
   //        console.log('Error', err);
   //    });
   // }
 
   async checkPermission() {
     try {
       // check or request permission
       const status = await BarcodeScanner.checkPermission({ force: true });
       if (status.granted) {
         // the user granted permission
         return true;
       }
       return false;
     } catch(e) {
       console.log(e);
       return;
     }
   }
 
   async startScan() {
     try {
       const permission = await this.checkPermission();
       if(!permission) {
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
       if(result?.hasContent) {
         this.scannedResult = result.content;
         console.log(this.scannedResult);
       }
     } catch(e) {
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
 
   ngOnDestroy(): void {
       this.stopScan();
   }
 
 }
 
