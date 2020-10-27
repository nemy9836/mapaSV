import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { DevelopersComponent } from './pages/developers/developers.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CentralComponent } from './pages/central/central.component';
import { OrientalComponent } from './pages/oriental/oriental.component';
import { OccidentalComponent } from './pages/occidental/occidental.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    DevelopersComponent,
    ContactComponent,
    CentralComponent,
    OrientalComponent,
    OccidentalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
