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

  constructor(private servicioMensaje: MensajeService) { }
}
