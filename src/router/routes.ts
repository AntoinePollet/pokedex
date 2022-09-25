import Pokedex from "@/views/Pokedex.vue";
import PokemonDetails from "@/views/PokemonDetails.vue";

export default [
    { path: '/pokedex', name: 'pokedex', component: Pokedex },
    { path: '/pokemon/:id', name: 'pokemonDetails', component: PokemonDetails },
]
