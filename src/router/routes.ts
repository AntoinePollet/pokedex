import Home from "@/views/Home.vue";
import Pokedex from "@/views/Pokedex.vue";
import PokemonDetails from "@/views/PokemonDetails.vue";
import PokemonTeam from "@/views/Team.vue";

export default [
    { path: '/', name: 'pokedex', component: Pokedex },
    { path: '/pokemon/:id', name: 'pokemonDetails', component: PokemonDetails },
    { path: '/team', name: 'pokemonTeam', component: PokemonTeam }
]
