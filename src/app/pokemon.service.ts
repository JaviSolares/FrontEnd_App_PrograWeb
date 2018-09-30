import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONES } from './mock-pokemones';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  getPokemones(): Pokemon[] {
    return POKEMONES;
  }

  constructor() { }
}
