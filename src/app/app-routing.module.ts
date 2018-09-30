import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonesComponent } from './pokemones/pokemones.component';

const rutas: Routes = [
  { path: 'pokemones', component: PokemonesComponent }
];

@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
