import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ComercialComponent } from './comercial/comercial.component';
import { IndustrialComponent } from './industrial/industrial.component';
import { ResidencialComponent } from './residencial/residencial.component';


const routes: Routes = [
  { path: 'contacto', component: ContactoComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'novedades', component: NovedadesComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'comercial', component: ComercialComponent },
  { path: 'residencial', component: ResidencialComponent },
  { path: 'industrial', component: IndustrialComponent },
  { path: '', component: BodyComponent, pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
  { path: '**', redirectTo: 'notfound', pathMatch: 'full' },
];



@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    ContactoComponent,
    NosotrosComponent,
    NotfoundComponent,
    NovedadesComponent,
    ServiciosComponent,
    ComercialComponent,
    IndustrialComponent,
    ResidencialComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
