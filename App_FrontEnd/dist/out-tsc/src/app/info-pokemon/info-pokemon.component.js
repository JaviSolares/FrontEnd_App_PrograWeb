var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PokemonService } from '../pokemon.service';
var InfoPokemonComponent = /** @class */ (function () {
    function InfoPokemonComponent(ruta, servicioPokemon, localizacion) {
        this.ruta = ruta;
        this.servicioPokemon = servicioPokemon;
        this.localizacion = localizacion;
    }
    InfoPokemonComponent.prototype.ngOnInit = function () {
        this.getPokemon();
    };
    InfoPokemonComponent.prototype.getPokemon = function () {
        var _this = this;
        var id = +this.ruta.snapshot.paramMap.get('id');
        this.servicioPokemon.getPokemon(id)
            .subscribe(function (pokemon) { return _this.pokemon = pokemon; });
    };
    InfoPokemonComponent.prototype.goBack = function () {
        this.localizacion.back();
    };
    InfoPokemonComponent.prototype.save = function () {
        var _this = this;
        this.servicioPokemon.updatePokemon(this.pokemon)
            .subscribe(function () { return _this.goBack(); });
    };
    __decorate([
        Input(),
        __metadata("design:type", Pokemon)
    ], InfoPokemonComponent.prototype, "pokemon", void 0);
    InfoPokemonComponent = __decorate([
        Component({
            selector: 'app-info-pokemon',
            templateUrl: './info-pokemon.component.html',
            styleUrls: ['./info-pokemon.component.css']
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            PokemonService,
            Location])
    ], InfoPokemonComponent);
    return InfoPokemonComponent;
}());
export { InfoPokemonComponent };
//# sourceMappingURL=info-pokemon.component.js.map