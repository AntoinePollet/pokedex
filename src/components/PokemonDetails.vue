<script lang="ts">
import { defineComponent, ref } from "vue";
import Pokemon from "@/components/Pokemon.vue";
import { usePokedexStore } from "@/stores/pokedex";
import { storeToRefs } from "pinia";
import { pokemonSprite, pokemonShinySprite, firstUppercase } from "@/utilities/pokemonUtilities";
import PokemonTypes from "@/components/PokemonType.vue";
import PokemonAbility from "@/components/PokemonAbilities.vue";

export default defineComponent({
    name: 'PokemonDetails',
    components: { PokemonAbility, PokemonTypes, Pokemon },
    setup() {
        const pokedexStore = usePokedexStore();
        const { pokemon } = storeToRefs(pokedexStore);
        const isDefault = ref<boolean>(true);

        return {
            pokemon,
            pokemonSprite,
            pokemonShinySprite,
            firstUppercase,
            isDefault
        }
    }
});
</script>

<template>
    <div v-if="pokemon" class="grid grid-cols-3 border rounded-3xl p-10">
        <div class="p-5">
            <button @click="isDefault = !isDefault" class="ring ring-2 ring-amber-200 bg-amber-500 text-white font-bold
                py-2 px-4 rounded-2xl outline-offset-2 hover:bg-amber-600 ring-offset-2">
                {{ isDefault ? 'Shiny' : 'Default'}}
            </button>
            <img :src="isDefault ? pokemonSprite(pokemon.id) : pokemonShinySprite(pokemon.id)" :alt="pokemon.name" />
            <div class=" font-bold flex flex-col">
                <h3 class="text-xl">{{ firstUppercase(pokemon.name) }}</h3>
                <div class="flex text-sm">
                    <pokemon-types v-for="type in pokemon.pokemon_v2_pokemontypes" :type="type" />
                </div>
            </div>
        </div>
        <div class="col-span-2 flex flex-col border-l">
            <div class="pl-5 text-left">
                <pokemon-ability :abilities="pokemon.pokemon_v2_pokemonabilities" />
            </div>
        </div>
    </div>
</template>
