import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  // <-- NgModel lives here
import { AppComponent } from './app.component';
import { PokemonesComponent } from './pokemones/pokemones.component';
import { InfoPokemonComponent } from './info-pokemon/info-pokemon.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PokemonesComponent,
    InfoPokemonComponent,
    MensajesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
