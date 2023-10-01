import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AtencionComponent } from './pages/atencion/atencion.component';
import { SensacionComponent } from './pages/sensacion/sensacion.component';
import { PercepcionComponent } from './pages/percepcion/percepcion.component';
import { EvidenciasComponent } from './pages/evidencias/evidencias.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'atencion', component: AtencionComponent },
  { path: 'sensacion', component: SensacionComponent },
  { path: 'percepcion', component: PercepcionComponent },
  { path: 'evidencias', component: EvidenciasComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', component: InicioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
