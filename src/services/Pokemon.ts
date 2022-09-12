import { http } from "@/http/http";
import type { Pokemon as PokemonType } from "@/types";

class Pokemon {

    async getPokemons(): Promise<PokemonType[]> {
        try {
            const res = await http.get('pokemon?limit=100000&offset=0')
            return res.data
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
