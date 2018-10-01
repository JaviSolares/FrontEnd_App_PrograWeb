import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { Observable, of } from 'rxjs';
import { MensajeService } from './mensaje.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemonesUrl = 'api/pokemones';  // URL to web api
  
  getPokemones(): Observable<Pokemon[]> {
    return of(POKEMONES);
  }

  getPokemon(id: number): Observable<Pokemon> {
    return of(POKEMONES.find(pokemon => pokemon.id === id));
  }

  /** Log a PokemonService message with the MensajeService */
  private log(mensaje: string) {
    this.servicioMensaje.add(`PokemonService: ${mensaje}`);
  }

  constructor(
    private http: HttpClient,
    private servicioMensaje: MensajeService) { }
}
