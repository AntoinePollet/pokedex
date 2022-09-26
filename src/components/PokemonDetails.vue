<script lang="ts">
import { defineComponent } from "vue";
import Pokemon from "@/components/Pokemon.vue";
import { usePokedexStore } from "@/stores/pokedex";
import { storeToRefs } from "pinia";
import { pokemonSprite, firstUppercase } from "@/utilities/pokemonUtilities";
import PokemonTypes from "@/components/PokemonType.vue";
import type { PokemonBaseResult } from "@/types";
import PokemonAbility from "@/components/PokemonAbility.vue";

export default defineComponent({
    name: 'PokemonDetails',
    components: { PokemonAbility, PokemonTypes, Pokemon },
    setup() {
        const pokedexStore = usePokedexStore();
        const { pokemon } = storeToRefs(pokedexStore);

        return {
            pokemon,
            pokemonSprite,
            firstUppercase
        }
    }
});
</script>

<template>
    <div v-if="pokemon" class="grid grid-cols-3 border rounded-3xl p-10">
        <div class="p-5">
            <img :src="pokemonSprite(pokemon.id)" :alt="pokemon.name" />
        </div>
        <div class="col-span-2 flex flex-col">
            <div class="border-l text-xl font-bold pl-5 flex">
                <h3>{{ firstUppercase(pokemon.name) }}</h3>
                <pokemon-types v-for="type in pokemon.pokemon_v2_pokemontypes" :type="type" />
            </div>
            <div>
                <pokemon-ability v-for="ability in pokemon.pokemon_v2_pokemonabilities" :ability="ability" />
            </div>
        </div>
    </div>
</template>
