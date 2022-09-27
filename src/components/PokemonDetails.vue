<script lang="ts">
import { defineComponent, ref } from "vue";
import Pokemon from "@/components/Pokemon.vue";
import { usePokedexStore } from "@/stores/pokedex";
import { storeToRefs } from "pinia";
import { pokemonSprite, pokemonShinySprite, firstUppercase } from "@/utilities/pokemonUtilities";
import PokemonTypes from "@/components/PokemonType.vue";
import PokemonAbility from "@/components/PokemonAbilities.vue";
import PokemonMoves from "@/components/PokemonMoves.vue";
import PokemonEvolutions from "@/components/PokemonEvolutions.vue";
import { useRouter } from "vue-router";

export default defineComponent({
    name: 'PokemonDetails',
    components: { PokemonEvolutions, PokemonMoves, PokemonAbility, PokemonTypes, Pokemon },
    emits: ['nextPokemon', 'previousPokemon'],
    setup(props, { emit }) {
        const pokedexStore = usePokedexStore();
        const { pokemon } = storeToRefs(pokedexStore);
        const isDefault = ref<boolean>(true);
        const router = useRouter();

        return {
            pokemon,
            pokemonSprite,
            pokemonShinySprite,
            firstUppercase,
            isDefault,
            router,
            emit
        }
    }
});
</script>

<template>
    <div v-if="pokemon" class="grid grid-cols-3 border rounded-3xl p-10">
        <div class="p-5 mx-auto">
            <button @click="emit('nextPokemon', pokemon.pokemon_v2_pokemonstat[0].pokemon_v2_pokemon.id + 1)">Go next</button>
            <img :src="isDefault ? pokemonSprite(pokemon.pokemon_v2_pokemonstat[0].pokemon_v2_pokemon.id) : pokemonShinySprite(pokemon.pokemon_v2_pokemonstat[0].pokemon_v2_pokemon.id)"
                 :alt="pokemon.pokemon_v2_pokemonstat[0].pokemon_v2_pokemon.name" class="m-auto"/>
            <div class=" font-bold flex flex-col">
                <h3 class="text-xl text-center">{{ firstUppercase(pokemon.pokemon_v2_pokemonstat[0].pokemon_v2_pokemon.name) }}</h3>
                <div class="flex justify-center text-sm">
                    <pokemon-types v-for="type in pokemon.pokemon_v2_pokemonstat[0].pokemon_v2_pokemon.pokemon_v2_pokemontypes" :type="type" />
                </div>
            </div>
            <div class="flex justify-center pt-4">
                <button @click="isDefault = !isDefault" class="ring ring-2 ring-emerald-50 bg-emerald-200 text-white font-medium
                py-1 px-3 rounded-2xl outline-offset-2 hover:bg-emerald-300 ring-offset-2 text-sm">
                    {{ isDefault ? 'Shiny' : 'Default'}}
                </button>
            </div>
        </div>
        <div class="col-span-2 flex flex-col border-l">
            <div class="pl-5 text-left">
                <pokemon-ability :abilities="pokemon.pokemon_v2_pokemonstat[0].pokemon_v2_pokemon.pokemon_v2_pokemonabilities" />
                <pokemon-moves :moves="pokemon.pokemon_v2_pokemonstat[0].pokemon_v2_pokemon.pokemon_v2_pokemonmoves" />
            </div>
        </div>
        <pokemon-evolutions class="col-span-3" :evolutions="pokemon.pokemon_v2_evolutionchain[0].pokemon_v2_pokemonspecies" />
    </div>
</template>
