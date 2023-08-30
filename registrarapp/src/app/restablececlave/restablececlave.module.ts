import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestablececlavePageRoutingModule } from './restablececlave-routing.module';

import { RestablececlavePage } from './restablececlave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestablececlavePageRoutingModule
  ],
  declarations: [RestablececlavePage]
})
export class RestablececlavePageModule {}
