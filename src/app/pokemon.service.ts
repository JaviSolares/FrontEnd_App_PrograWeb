import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { Observable, of } from 'rxjs';
import { MensajeService } from './mensaje.service';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers } from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new Headers({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemonesUrl = 'http://localhost5000:/api/v1/pokemon';  // URL to web api
  
  /** GET pokemones from the server */
  getPokemones() {
    return this.http.get('http://localhost5000:/api/v1/pokemon')
      .pipe(
        map(res => res.json()),
        catchError(this.handleError('getPokemones', []))
      );
  }

  /** GET pokemon by id. Will 404 if id not found */
  getPokemon(id: number) {
    const url = `${this.pokemonesUrl}/${id}`;
    return this.http.get(url).pipe(
      map(_ => this.log(`se recuperó pokémon id=${id}`)),
      catchError(this.handleError(`getPokemon id=${id}`))
    );
  }

  /** PUT: update the pokemon on the server */
  updatePokemon (pokemon: Pokemon) {
    const url = `${this.pokemonesUrl}/update-pokemon-data/${pokemon.id}`;
    return this.http.put(url, pokemon, httpOptions).pipe(
      map(_ => this.log(`se actualizó el pokémon id=${pokemon.id}`)),
      catchError(this.handleError('updatePokemon'))
    );
  }

  /** POST: add a new pokemon to the server */
  addPokemon (pokemon: Pokemon) {
    return this.http.post(this.pokemonesUrl + '/add-new', pokemon, httpOptions).pipe(
      map((pokemon: Pokemon) => this.log(`se creó un pokémon con id=${pokemon.id}`)),
      catchError(this.handleError('addPokemon'))
    );
  }

  /** DELETE: delete the pokemon from the server */
  deletePokemon (pokemon: Pokemon | number) {
    const id = typeof pokemon === 'number' ? pokemon : pokemon.id;
    const url = `${this.pokemonesUrl}/delete-pokemon-data/${id}`;

    return this.http.delete(url, httpOptions).pipe(
      map(_ => this.log(`se eliminó al pokémon id=${id}`)),
      catchError(this.handleError('deletePokemon'))
    );
  }

  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError (operation = 'operation', result?) {
    return (error: any) => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result);
  };
}

  /** Log a PokemonService message with the MensajeService */
  private log(mensaje: string) {
    this.servicioMensaje.add(`PokemonService: ${mensaje}`);
  }

  constructor(
    private http: Http,
    private servicioMensaje: MensajeService) { }
}
