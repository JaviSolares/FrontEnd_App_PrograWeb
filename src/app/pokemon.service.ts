import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONES } from './mock-pokemones';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  getPokemones(): Observable<Pokemon[]> {
    return of(POKEMONES);
  }

  constructor() { }
}
