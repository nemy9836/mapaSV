import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CentralComponent } from './pages/central/central.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DevelopersComponent } from './pages/developers/developers.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { OccidentalComponent } from './pages/occidental/occidental.component';
import { OrientalComponent } from './pages/oriental/oriental.component';
import { InformationComponent } from './pages/information/information.component';
import { AhuachapanComponent } from './pages/ahuachapan/ahuachapan.component';
import { CabanasComponent } from './pages/cabanas/cabanas.component';
import { ChalatenangoComponent } from './pages/chalatenango/chalatenango.component';
import { CuscatlanComponent } from './pages/cuscatlan/cuscatlan.component';
import { LaLivertadComponent } from './pages/la-livertad/la-livertad.component';
import { LaPazComponent } from './pages/la-paz/la-paz.component';
import { LaUnionComponent } from './pages/la-union/la-union.component';
import { MorazanComponent } from './pages/morazan/morazan.component';
import { SanMiguelComponent } from './pages/san-miguel/san-miguel.component';
import { SanVicenteComponent } from './pages/san-vicente/san-vicente.component';
import { SantaAnaComponent } from './pages/santa-ana/santa-ana.component';
import { SonsonateComponent } from './pages/sonsonate/sonsonate.component';
import { UsulutanComponent } from './pages/usulutan/usulutan.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'developers', component: DevelopersComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'central', component: CentralComponent },
  { path: 'occidental', component: OccidentalComponent },
  { path: 'oriental', component: OrientalComponent },
  { path: 'informacion', component: InformationComponent },
  { path: 'ahuachapan', component: AhuachapanComponent },
  { path: 'cabanas', component: CabanasComponent },
  { path: 'chalatenango', component: ChalatenangoComponent },
  { path: 'cuscatlan', component: CuscatlanComponent },
  { path: 'lalivertad', component: LaLivertadComponent },
  { path: 'lapaz', component: LaPazComponent },
  { path: 'launion', component: LaUnionComponent },
  { path: 'morazan', component: MorazanComponent },
  { path: 'sanmiguel', component: SanMiguelComponent },
  { path: 'sanvicente', component: SanVicenteComponent },
  { path: 'santaana', component: SantaAnaComponent },
  { path: 'sonsonate', component: SonsonateComponent },
  { path: 'usulutan', component: UsulutanComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
