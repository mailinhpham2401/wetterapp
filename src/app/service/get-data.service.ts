import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Zutaten{
  'id': number ;
  'bezeichnung': string;
  'alk': string ;
  'text':string ;
  'menge': string;
  'home': string;
}

interface Cocktail{
  'id': number;
  'bezeichnung': string;
  'bild': string ;
  'rezept': string ;
  'fav': string ;
  'anzfav': number;
  'zutaten': Zutaten[];
}

interface CocktailListe {
  'error': number;
  'cocktails': Cocktail[];
}


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  cocktailliste: CocktailListe = null;

  constructor(private http: HttpClient) { }
  onGetData(){
    this.http.get<CocktailListe>('https://digiboard.htwk-leipzig.de/cocktail/rest/getcocktails.php')
    .subscribe(resData =>{
      console.log(resData.cocktails);
      return this.cocktailliste = resData;
     
    });
  }
}
