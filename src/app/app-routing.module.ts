import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CentralComponent } from './pages/central/central.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DevelopersComponent } from './pages/developers/developers.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { OccidentalComponent } from './pages/occidental/occidental.component';
import { OrientalComponent } from './pages/oriental/oriental.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'developers', component: DevelopersComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'central', component: CentralComponent },
  { path: 'occidental', component: OccidentalComponent },
  { path: 'oriental', component: OrientalComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
