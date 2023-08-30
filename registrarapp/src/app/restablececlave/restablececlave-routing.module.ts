import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestablececlavePage } from './restablececlave.page';

const routes: Routes = [
  {
    path: '',
    component: RestablececlavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestablececlavePageRoutingModule {}
