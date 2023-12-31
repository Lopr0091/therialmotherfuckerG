import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotfoundPage } from './notfound/notfound.page';
import { NoingresoGuard } from './noingreso.guard';
import { IngresoGuard } from './ingreso.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    /*canActivate:[IngresoGuard]*/
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate:[NoingresoGuard]
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate:[IngresoGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'avatar',
    loadChildren: () => import('./avatar/avatar.module').then( m => m.AvatarPageModule)
  },
  {
    path: 'horario',
    loadChildren: () => import('./horario/horario.module').then( m => m.HorarioPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./qr/qr.module').then( m => m.QrPageModule)
  },
  {
    path: '**',
    component: NotfoundPage,
    loadChildren: () => import('./notfound/notfound.module').then( m => m.NotfoundPageModule)
  },
 


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
