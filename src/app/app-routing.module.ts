import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonesComponent } from './pokemones/pokemones.component';
import { InfoPokemonComponent } from './info-pokemon/info-pokemon.component';

const rutas: Routes = [
  { path: 'detail/:id', component: InfoPokemonComponent },
  { path: 'pokemones', component: PokemonesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(rutas) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
