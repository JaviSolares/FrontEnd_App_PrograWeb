import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { Observable, of } from 'rxjs';
import { MensajeService } from './mensaje.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemonesUrl = 'api/pokemones';  // URL to web api
  
  /** GET pokemones from the server */
  getPokemones (): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonesUrl)
      .pipe(
        catchError(this.handleError('getPokemones', []))
      );
  }

  getPokemon(id: number): Observable<Pokemon> {
    return of(POKEMONES.find(pokemon => pokemon.id === id));
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
