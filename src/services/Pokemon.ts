import { http } from "@/http/http";
import type { PokemonBaseResult } from "@/types";

class Pokemon {

    async getPokemons(): Promise<PokemonBaseResult[]> {
        try {
            const res = await http.get('pokemon?limit=905&offset=0')
            return res.data.results;
        } catch (e: any) {
            return e;
        }
    }

    async getPokemon(pokemonNameOrId: string | number) {
        try {
            const res = await http.get(`pokemon/${pokemonNameOrId}`)
        } catch (e) {

        }
    }
}

const pokemon = new Pokemon();

export default pokemon;
