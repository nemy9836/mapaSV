import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PetitionsService {

  //https://sv-mapa.herokuapp.com/central

  private url1 = 'https://svmapa503.herokuapp.com/central';
  private url2 = 'https://svmapa503.herokuapp.com/oriental';
  private url3 = 'https://svmapa503.herokuapp.com/occidental';

  constructor(private http:HttpClient) {
    console.log('Servicio listo')
   }

  getCentral(){

    return this.http.get(this.url1)

  }

  getOriental(){

    return this.http.get(this.url2)

  }

  getOccidental(){

    return this.http.get(this.url3)

  }

}
