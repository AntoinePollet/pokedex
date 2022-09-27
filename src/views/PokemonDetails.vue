<script lang="ts">
import { computed, defineComponent, onMounted, watch } from "vue";
import Pokemon from "@/components/Pokemon.vue";
import { usePokedexStore } from "@/stores/pokedex";
import { storeToRefs } from "pinia";
import PokemonDetails from "@/components/PokemonDetails.vue";
import { useRoute, useRouter } from "vue-router";
import type { VariablesParameter } from "@vue/apollo-composable/dist/useQuery";
import type { OperationVariables } from "@apollo/client";

export default defineComponent({
    name: 'PokemonDetailView',
    components: { PokemonDetails, Pokemon },
    setup() {
        const route = useRoute();
        const router = useRouter();
        const pokedexStore = usePokedexStore();
        const { getPokemon, getPokedex } = pokedexStore;
        const { pokemon } = storeToRefs(pokedexStore);

        const pokemonId: VariablesParameter<OperationVariables> = computed(() => route.params.id);

        const nextPokemon = (async (id: number) => {
            await router.push({ name: 'pokemonDetails', params: { id: 2 }});
        });

        const previousPokemon = ((id: number) => {});

        onMounted(async () => {
            await getPokemon(pokemonId.value);
        });

        watch(pokemonId, () => {

            getPokemon(pokemonId.value);

        })

        return {
            pokemon,
            previousPokemon,
            nextPokemon
        }
    }
});
</script>

<template>
    <div class="py-10">
        <button @click="nextPokemon">click</button>
        <pokemon-details @next-pokemon="nextPokemon" @previous-pokemon="previousPokemon"/>
    </div>
</template>
