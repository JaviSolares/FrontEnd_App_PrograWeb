import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { Observable, of } from 'rxjs';
import { MensajeService } from './mensaje.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemonesUrl = 'api/pokemones';  // URL to web api
  
  /** GET pokemones from the server */
  getPokemones (): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonesUrl)
      .pipe(
        tap(pokemones => this.log('se recuperó la lista de pokémon')),
        catchError(this.handleError('getPokemones', []))
      );
  }

  /** GET pokemon by id. Will 404 if id not found */
  getPokemon(id: number): Observable<Pokemon> {
    const url = `${this.pokemonesUrl}/${id}`;
    return this.http.get<Pokemon>(url).pipe(
      tap(_ => this.log(`se recuperó pokémon id=${id}`)),
      catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
    );
  }

  /** PUT: update the pokemon on the server */
  updatePokemon (pokemon: Pokemon): Observable<any> {
    return this.http.put(this.pokemonesUrl, pokemon, httpOptions).pipe(
      tap(_ => this.log(`se actualizó el pokémon id=${pokemon.id}`)),
      catchError(this.handleError<any>('updatePokemon'))
    );
  }

  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  /** Log a PokemonService message with the MensajeService */
  private log(mensaje: string) {
    this.servicioMensaje.add(`PokemonService: ${mensaje}`);
  }

  constructor(
    private http: HttpClient,
    private servicioMensaje: MensajeService) { }
}
