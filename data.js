const listaPokemon = [
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

module.exports = {
    getLista: function() {
        return listaPokemon;
    },
    createPokemon: function(n_id, n_nombre, n_tipo_prim, n_tipo_secu, n_region) {
        var nuevo = {
            id: parseInt(n_id),
            nombre: n_nombre,
            tipo_prim: n_tipo_prim,
            tipo_secu: n_tipo_secu,
            region: n_region
        };
        return nuevo;
    },
    editPokemon: function(pokemon, n_nombre, n_tipo_prim, n_tipo_secu, n_region) {
        n_nombre = String(n_nombre);
        n_tipo_prim = String(n_tipo_prim);
        n_tipo_secu = String(n_tipo_secu);
        n_region = String(n_region);
        if (pokemon.nombre !== n_nombre)
        {
            pokemon.nombre = n_nombre;
        }
        if (pokemon.tipo_prim !== n_tipo_prim)
        {
            pokemon.tipo_prim = n_tipo_prim;
        }
        if (pokemon.tipo_secu !== n_tipo_secu)
        {
            pokemon.tipo_secu = n_tipo_secu;
        }
        if (pokemon.region !== n_region)
        {
            pokemon.region = n_region;
        }
        return pokemon;
    }
}

