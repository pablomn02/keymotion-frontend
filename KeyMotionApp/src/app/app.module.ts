import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { HomeComponent } from './paginas/home/home.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { VehiculosComponent } from './paginas/vehiculos/vehiculos.component';

import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'vehiculos', component: VehiculosComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ContactoComponent,
    VehiculosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
