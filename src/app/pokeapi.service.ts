import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  private apiUrl = "https://pokeapi.co/api/v2/pokemon/"
  private limit = 20;
  private offset = 20;

  constructor(private http: HttpClient) { }

  getListPokemones(): Observable<any> {
    return this.http.get(`${this.apiUrl}?limit=${this.limit}&offset=0`);
  }

  getDetailPokemon(urlPokemon: any): Observable<any> {
    return this.http.get(urlPokemon);
  }
}
