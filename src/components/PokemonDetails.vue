<script lang="ts">
import { computed, defineComponent, type PropType, ref, toRefs } from "vue";
import Pokemon from "@/components/Pokemon.vue";
import { pokemonSprite, pokemonShinySprite, firstUppercase } from "@/utilities/pokemonUtilities";
import PokemonTypes from "@/components/PokemonType.vue";
import PokemonAbility from "@/components/PokemonAbilities.vue";
import PokemonMoves from "@/components/PokemonMoves.vue";
import PokemonEvolutions from "@/components/PokemonEvolutions.vue";
import { useRouter } from "vue-router";
import type { PokemonBaseResult } from "@/types";

export default defineComponent({
    name: 'PokemonDetails',
    components: { PokemonEvolutions, PokemonMoves, PokemonAbility, PokemonTypes, Pokemon },
    props: {
        pokemon: {
            type: Object as PropType<PokemonBaseResult>
        }
    },
    setup(props) {
        const { pokemon } = toRefs(props);
        const isDefault = ref<boolean>(true);
        const router = useRouter();

        const pokemonStat = computed(() => {
            if (pokemon.value) {
                return pokemon.value?.pokemon_v2_pokemonstat[0].pokemon_v2_pokemon
            }
        });

        const switchSprite = computed(() => {
            if (isDefault.value) {
                return 'Click me to switch to shiny';
            } else {
                return 'Click me to switch to default';
            }
        });

        return {
            pokemon,
            pokemonStat,
            pokemonSprite,
            pokemonShinySprite,
            firstUppercase,
            isDefault,
            router,
            switchSprite
        }
    }
});
</script>

<template>
    <div v-if="pokemon && pokemonStat" class="grid grid-cols-1 md:grid-cols-3 border rounded-3xl p-5 md:p-10 relative">
        <span @click="router.push({ name: 'pokemonDetails', params: { id: pokemonStat.id +1 }})"
            :class="(pokemonStat.id === 905 ? 'bg-gray-100 cursor-default pointer-events-none' : 'hover:bg-gray-100 cursor-pointer') +
            ' material-symbols-outlined absolute top-[-20px] left-2/3 z-20 bg-white dark:text-dark-1 rounded-full p-2 border'">
            arrow_forward
        </span>
        <span @click="router.push({ name: 'pokemonDetails', params: { id: pokemonStat.id -1 }})"
            :class="(pokemonStat.id === 1 ? 'bg-gray-100 cursor-default pointer-events-none' : 'hover:bg-gray-100 cursor-pointer') +
            ' material-symbols-outlined absolute top-[-20px] left-1/3 z-20 bg-white dark:text-dark-1 rounded-full p-2 border'">
            arrow_back
        </span>
        <div class="p-5 md:mx-auto">
            <img :src="isDefault ? pokemonSprite(pokemonStat.id) : pokemonShinySprite(pokemonStat.id)"
                :alt="pokemonStat.name" class="m-auto"/>
            <div class=" font-bold flex justify-center gap-2 md:flex-col">
                <h3 class="text-xl text-center">
                    {{ firstUppercase(pokemonStat.name) }}</h3>
                <div class="flex justify-center gap-2 text-sm">
                    <pokemon-types
                        v-for="type in pokemonStat.pokemon_v2_pokemontypes"
                        :type="type" :key="type.pokemon_v2_type.id" />
                </div>
            </div>
            <div class="flex justify-center pt-4">
                <p @click="isDefault = !isDefault" class="italic text-sm font-mono cursor-pointer bg-gray-100 dark:text-dark-1 p-1 rounded-lg">{{ switchSprite }}</p>
            </div>
        </div>
        <div class="col-span-2 flex flex-col md:border-l">
            <div class="md:pl-5 text-left">
                <pokemon-ability
                    :abilities="pokemonStat.pokemon_v2_pokemonabilities"/>
                <pokemon-moves :moves="pokemonStat.pokemon_v2_pokemonmoves"/>
            </div>
        </div>
        <pokemon-evolutions v-if="pokemon.pokemon_v2_evolutionchain.length > 0" class="md:col-span-3"
            :evolutions="pokemon.pokemon_v2_evolutionchain[0].pokemon_v2_pokemonspecies"/>
    </div>
</template>
