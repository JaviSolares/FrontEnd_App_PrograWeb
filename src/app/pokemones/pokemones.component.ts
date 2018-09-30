import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONES } from '../mock-pokemones';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.css']
})
export class PokemonesComponent implements OnInit {

  selectedPokemon: Pokemon;

  pokemones = POKEMONES;

  onSelect(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
  }

  constructor() { }

  ngOnInit() {
  }

}
