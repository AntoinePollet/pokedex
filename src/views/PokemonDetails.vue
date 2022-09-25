<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import Pokemon from "@/components/Pokemon.vue";
import { usePokedexStore } from "@/stores/pokedex";
import { storeToRefs } from "pinia";
import PokemonDetails from "@/components/PokemonDetails.vue";
import { useRoute } from "vue-router";
import type { VariablesParameter } from "@vue/apollo-composable/dist/useQuery";
import type { OperationVariables } from "@apollo/client";

export default defineComponent({
    name: 'PokemonDetailView',
    components: { PokemonDetails, Pokemon },
    setup() {
        const route = useRoute();
        const pokedexStore = usePokedexStore();
        const { getPokemon } = pokedexStore;
        const { pokemon } = storeToRefs(pokedexStore);

        const pokemonId: VariablesParameter<OperationVariables> = computed(() => route.params.id);

        onMounted(async () => {
            await getPokemon(pokemonId.value);
        });

        return {
            pokemon
        }
    }
});
</script>

<template>
    <div class="py-10">
        <pokemon-details />
    </div>
</template>
