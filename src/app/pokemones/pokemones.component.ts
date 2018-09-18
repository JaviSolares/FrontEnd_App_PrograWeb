import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.css']
})
export class PokemonesComponent implements OnInit {

  pokemon: Pokemon = {
    id: 389,
    nombre: 'Torterra',
    tipo_prim: 'Planta',
    tipo_secu: 'Tierra',
    region: 'Sinnoh'
  };

  constructor() { }

  ngOnInit() {
  }

}
