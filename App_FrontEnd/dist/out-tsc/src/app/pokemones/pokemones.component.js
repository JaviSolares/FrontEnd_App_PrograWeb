var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { PokemonService } from '../pokemon.service';
var PokemonesComponent = /** @class */ (function () {
    function PokemonesComponent(pokemonService) {
        this.pokemonService = pokemonService;
    }
    PokemonesComponent.prototype.getPokemones = function () {
        var _this = this;
        this.pokemonService.getPokemones()
            .subscribe(function (pokemones) { return _this.pokemones = pokemones; });
    };
    PokemonesComponent.prototype.add = function (nombre, tipo_prim, tipo_secu, region) {
        var _this = this;
        nombre = nombre.trim();
        tipo_prim = tipo_prim.trim();
        tipo_secu = tipo_secu.trim();
        region = region.trim();
        if (!nombre) {
            return;
        }
        this.pokemonService.addPokemon({ nombre: nombre, tipo_prim: tipo_prim, tipo_secu: tipo_secu, region: region })
            .subscribe(function (pokemon) {
            _this.pokemones.push(pokemon);
        });
    };
    PokemonesComponent.prototype.delete = function (pokemon) {
        this.pokemones = this.pokemones.filter(function (p) { return p !== pokemon; });
        this.pokemonService.deletePokemon(pokemon).subscribe();
    };
    PokemonesComponent.prototype.ngOnInit = function () {
        this.getPokemones();
    };
    PokemonesComponent = __decorate([
        Component({
            selector: 'app-pokemones',
            templateUrl: './pokemones.component.html',
            styleUrls: ['./pokemones.component.css']
        }),
        __metadata("design:paramtypes", [PokemonService])
    ], PokemonesComponent);
    return PokemonesComponent;
}());
export { PokemonesComponent };
//# sourceMappingURL=pokemones.component.js.map