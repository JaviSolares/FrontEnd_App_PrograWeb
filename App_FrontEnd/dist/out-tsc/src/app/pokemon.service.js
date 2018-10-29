var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { MensajeService } from './mensaje.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
var httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
var PokemonService = /** @class */ (function () {
    function PokemonService(http, servicioMensaje) {
        this.http = http;
        this.servicioMensaje = servicioMensaje;
        this.pokemonesUrl = 'api/pokemones'; // URL to web api
    }
    /** GET pokemones from the server */
    PokemonService.prototype.getPokemones = function () {
        var _this = this;
        return this.http.get(this.pokemonesUrl)
            .pipe(tap(function (pokemones) { return _this.log('se recuperó la lista de pokémon'); }), catchError(this.handleError('getPokemones', [])));
    };
    /** GET pokemon by id. Will 404 if id not found */
    PokemonService.prototype.getPokemon = function (id) {
        var _this = this;
        var url = this.pokemonesUrl + "/" + id;
        return this.http.get(url).pipe(tap(function (_) { return _this.log("se recuper\u00F3 pok\u00E9mon id=" + id); }), catchError(this.handleError("getPokemon id=" + id)));
    };
    /** PUT: update the pokemon on the server */
    PokemonService.prototype.updatePokemon = function (pokemon) {
        var _this = this;
        return this.http.put(this.pokemonesUrl, pokemon, httpOptions).pipe(tap(function (_) { return _this.log("se actualiz\u00F3 el pok\u00E9mon id=" + pokemon.id); }), catchError(this.handleError('updatePokemon')));
    };
    /** POST: add a new hero to the server */
    PokemonService.prototype.addPokemon = function (pokemon) {
        var _this = this;
        return this.http.post(this.pokemonesUrl, pokemon, httpOptions).pipe(tap(function (pokemon) { return _this.log("se cre\u00F3 un pok\u00E9mon con id=" + pokemon.id); }), catchError(this.handleError('addPokemon')));
    };
    /** DELETE: delete the pokemon from the server */
    PokemonService.prototype.deletePokemon = function (pokemon) {
        var _this = this;
        var id = typeof pokemon === 'number' ? pokemon : pokemon.id;
        var url = this.pokemonesUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(tap(function (_) { return _this.log("se elimin\u00F3 al pok\u00E9mon id=" + id); }), catchError(this.handleError('deletePokemon')));
    };
    /**
    * Handle Http operation that failed.
    * Let the app continue.
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result
    */
    PokemonService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return of(result);
        };
    };
    /** Log a PokemonService message with the MensajeService */
    PokemonService.prototype.log = function (mensaje) {
        this.servicioMensaje.add("PokemonService: " + mensaje);
    };
    PokemonService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient,
            MensajeService])
    ], PokemonService);
    return PokemonService;
}());
export { PokemonService };
//# sourceMappingURL=pokemon.service.js.map