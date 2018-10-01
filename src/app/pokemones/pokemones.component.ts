import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.css']
})
export class PokemonesComponent implements OnInit {
  pokemones: Pokemon[];

  getPokemones(): void {
    this.pokemonService.getPokemones()
      .subscribe(pokemones => this.pokemones = pokemones);
  }

  add(nombre: string, tipo_prim: string, tipo_secu: string, region: string): void {
    nombre = nombre.trim();
    tipo_prim = tipo_prim.trim();
    tipo_secu = tipo_secu.trim();
    region = region.trim();
    if (!nombre) { return; }
    this.pokemonService.addPokemon({ nombre, tipo_prim, tipo_secu, region } as Pokemon)
      .subscribe(pokemon => {
        this.pokemones.push(pokemon);
      });
  }

  delete(pokemon: Pokemon): void {
    this.pokemones = this.pokemones.filter(p => p !== pokemon);
    this.pokemonService.deletePokemon(pokemon).subscribe();
  }

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemones();
  }
}
