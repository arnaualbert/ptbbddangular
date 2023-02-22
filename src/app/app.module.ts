import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { MotivacioComponent } from './components/motivacio/motivacio.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { MoreanimalsComponent } from './components/moreanimals/moreanimals.component';
import { DeleteanimalComponent } from './components/deleteanimal/deleteanimal.component';
import { UpdateanimalComponent } from './components/updateanimal/updateanimal.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MotivacioComponent,
    PresentacionComponent,
    TablaComponent,
    MoreanimalsComponent,
    DeleteanimalComponent,
    UpdateanimalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
