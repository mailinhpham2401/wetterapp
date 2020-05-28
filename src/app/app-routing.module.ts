import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { ZutatenComponent } from './zutaten/zutaten.component';
import { SucheComponent } from './suche/suche.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { FavoritComponent } from './favorit/favorit.component';
import { RegistierenComponent } from './registieren/registieren.component';
import { NichtgefundenComponent } from './nichtgefunden/nichtgefunden.component';


const routes: Routes = [
  { path: '',   redirectTo: '/start', pathMatch: 'full' },
    { path: 'start',  component: StartComponent },
    { path: 'cocktails', component: CocktailsComponent },
    { path: 'zutaten', component: ZutatenComponent },
    { path: 'suche', component: SucheComponent },
    { path: 'impressum', component: ImpressumComponent },
    { path: 'favorit', component: FavoritComponent },
    { path: 'registieren', component: RegistierenComponent},
    {path: '**', component: NichtgefundenComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
