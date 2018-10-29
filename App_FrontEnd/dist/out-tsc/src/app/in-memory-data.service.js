var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var pokemones = [
            { id: 1, nombre: 'Bulbasaur', tipo_prim: 'Planta', tipo_secu: 'Veneno', region: 'Kanto' },
            { id: 2, nombre: 'Ivysaur', tipo_prim: 'Planta', tipo_secu: 'Veneno', region: 'Kanto' },
            { id: 3, nombre: 'Venusaur', tipo_prim: 'Planta', tipo_secu: 'Veneno', region: 'Kanto' },
            { id: 155, nombre: 'Cyndaquil', tipo_prim: 'Fuego', tipo_secu: '---', region: 'Johto' },
            { id: 156, nombre: 'Quilava', tipo_prim: 'Fuego', tipo_secu: '---', region: 'Johto' },
            { id: 157, nombre: 'Typhlosion', tipo_prim: 'Fuego', tipo_secu: '---', region: 'Johto' },
            { id: 258, nombre: 'Mudkip', tipo_prim: 'Agua', tipo_secu: '---', region: 'Hoenn' },
            { id: 259, nombre: 'Marshtomp', tipo_prim: 'Agua', tipo_secu: 'Tierra', region: 'Hoenn' },
            { id: 260, nombre: 'Swampert', tipo_prim: 'Agua', tipo_secu: 'Tierra', region: 'Hoenn' }
        ];
        return { pokemones: pokemones };
    };
    // Overrides the genId method to ensure that a pokemon always has an id.
    // If the pokemon array is empty,
    // the method below returns the initial number (11).
    // if the pokemon array is not empty, the method below returns the highest
    // pokemon id + 1.
    InMemoryDataService.prototype.genId = function (pokemones) {
        return pokemones.length > 0 ? Math.max.apply(Math, pokemones.map(function (pokemon) { return pokemon.id; })) + 1 : 1;
    };
    return InMemoryDataService;
}());
export { InMemoryDataService };
//# sourceMappingURL=in-memory-data.service.js.map