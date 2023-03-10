import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteanimalComponent } from './components/deleteanimal/deleteanimal.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MoreanimalsComponent } from './components/moreanimals/moreanimals.component';
import { MotivacioComponent } from './components/motivacio/motivacio.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { RegisterComponent } from './components/register/register.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { UpdateanimalComponent } from './components/updateanimal/updateanimal.component';
import { NoentryGuard } from './guards/noentry.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch: 'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate:[NoentryGuard]
  },
  {
    path: 'motivacio',
    component:MotivacioComponent  
  },
  {
    path: 'presentacion',
    component:PresentacionComponent
  },
  {
    path: 'tabla',
    component:TablaComponent
  },
  {
    path: 'newanimal',
    component:MoreanimalsComponent,
    canActivate:[NoentryGuard]
  },
  {
    path: 'deleteanimal',
    component:DeleteanimalComponent,
    canActivate:[NoentryGuard]
  },
  {
    path: 'updateanimal',
    component:UpdateanimalComponent,
    canActivate:[NoentryGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
