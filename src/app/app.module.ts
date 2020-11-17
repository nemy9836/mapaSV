import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { DevelopersComponent } from './pages/developers/developers.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CentralComponent } from './pages/central/central.component';
import { OrientalComponent } from './pages/oriental/oriental.component';
import { OccidentalComponent } from './pages/occidental/occidental.component';
import { InformationComponent } from './pages/information/information.component';
import { LaLivertadComponent } from './pages/la-livertad/la-livertad.component';
import { LaPazComponent } from './pages/la-paz/la-paz.component';
import { CuscatlanComponent } from './pages/cuscatlan/cuscatlan.component';
import { SanVicenteComponent } from './pages/san-vicente/san-vicente.component';
import { CabanasComponent } from './pages/cabanas/cabanas.component';
import { ChalatenangoComponent } from './pages/chalatenango/chalatenango.component';
import { SantaAnaComponent } from './pages/santa-ana/santa-ana.component';
import { AhuachapanComponent } from './pages/ahuachapan/ahuachapan.component';
import { SonsonateComponent } from './pages/sonsonate/sonsonate.component';
import { SanMiguelComponent } from './pages/san-miguel/san-miguel.component';
import { MorazanComponent } from './pages/morazan/morazan.component';
import { LaUnionComponent } from './pages/la-union/la-union.component';
import { UsulutanComponent } from './pages/usulutan/usulutan.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    DevelopersComponent,
    ContactComponent,
    CentralComponent,
    OrientalComponent,
    OccidentalComponent,
    InformationComponent,
    LaLivertadComponent,
    LaPazComponent,
    CuscatlanComponent,
    SanVicenteComponent,
    CabanasComponent,
    ChalatenangoComponent,
    SantaAnaComponent,
    AhuachapanComponent,
    SonsonateComponent,
    SanMiguelComponent,
    MorazanComponent,
    LaUnionComponent,
    UsulutanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
