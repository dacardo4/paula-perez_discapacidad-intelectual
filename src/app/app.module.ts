import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AtencionComponent } from './pages/atencion/atencion.component';
import { SensacionComponent } from './pages/sensacion/sensacion.component';
import { PercepcionComponent } from './pages/percepcion/percepcion.component';
import { EvidenciasComponent } from './pages/evidencias/evidencias.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    AtencionComponent,
    SensacionComponent,
    PercepcionComponent,
    EvidenciasComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
