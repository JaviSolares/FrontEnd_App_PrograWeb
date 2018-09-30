import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.css']
})
export class PokemonesComponent implements OnInit {

  selectedPokemon: Pokemon;

  pokemones: Pokemon[];

  onSelect(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
  }

  getPokemones(): void {
    this.pokemonService.getPokemones()
      .subscribe(pokemones => this.pokemones = pokemones);
  }

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemones();
  }

}
