import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StartComponent } from './start/start.component';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { ZutatenComponent } from './zutaten/zutaten.component';
import { SucheComponent } from './suche/suche.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { FavoritComponent } from './favorit/favorit.component';
import { RegistierenComponent } from './registieren/registieren.component';
import { NichtgefundenComponent } from './nichtgefunden/nichtgefunden.component';
import {GetDataService} from './service/get-data.service';
import {LoginService} from './service/login.service';




@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    CocktailsComponent,
    ZutatenComponent,
    SucheComponent,
    ImpressumComponent,
    FavoritComponent,
    RegistierenComponent,
    NichtgefundenComponent,
    
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    {provide: LoginService, useClass:LoginService, },
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
