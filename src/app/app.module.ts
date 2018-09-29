import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  // <-- NgModel lives here
import { AppComponent } from './app.component';
import { PokemonesComponent } from './pokemones/pokemones.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
