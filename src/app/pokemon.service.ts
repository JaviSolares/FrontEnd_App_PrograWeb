import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONES } from './mock-pokemones';
import { Observable, of } from 'rxjs';
import { MensajeService } from './mensaje.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  getPokemones(): Observable<Pokemon[]> {
    // TODO: send the message _after_ fetching the heroes
    this.servicioMensaje.add('PokemonService: se recuperaron pokémon');
    return of(POKEMONES);
  }

  getPokemon(id: number): Observable<Pokemon> {
    // TODO: send the message _after_ fetching the pokemon
    this.servicioMensaje.add(`PokemonService: se recuperó pokémon id=${id}`);
    return of(POKEMONES.find(pokemon => pokemon.id === id));
  }

  constructor(private servicioMensaje: MensajeService) { }
}
