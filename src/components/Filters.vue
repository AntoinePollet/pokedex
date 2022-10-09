<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from "vue";
import { usePokedexStore } from "@/stores/pokedex";
import { colorFromType } from "@/utilities/pokemonUtilities";
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from "@headlessui/vue"
import { storeToRefs } from "pinia";

export default defineComponent({
    components: { Listbox, ListboxOption, ListboxOptions, ListboxButton },
    setup(props, { emit }) {
        const pokedexStore = usePokedexStore();
        const { pokedex } = storeToRefs(pokedexStore);

        const searchPokemonName = ref<String>('');
        const typesSelected = ref<String[]>([]);

        const filteredPokemon = () => {
            let pokemons = pokedex.value;
            if (searchPokemonName.value.trim().length > 0) {
                pokemons = pokemons.filter(pokemon => pokemon.name.indexOf(searchPokemonName.value.trim()) !== -1);
            }
            if (typesSelected.value.length > 0) {
                pokemons = pokemons.filter(pokemon => {
                    const types = pokemon.pokemon_v2_pokemontypes.map((type: any) => {
                        return type.pokemon_v2_type.name;
                    });
                    if (typesSelected.value.some(type => types.includes(type))) {
                        return pokemon;
                    }
                })
            }
            return pokemons;
        };

        watch(filteredPokemon, (value) => {
            emit('pokemonsFiltered', value);
        },{ deep: true });

        return { searchPokemonName, typesSelected, colorFromType }
    }
});
</script>

<template>
    <div class="flex">
        <div>
            <input v-model="searchPokemonName" type="search" autocomplete="off" placeholder="Search by name ..."
                   class="border bg-gray-50 border-gray-300 text-gray-900 font-mono rounded-md p-2 text-sm
                   placeholder-gray-400 focus:ring-amber-500 focus:border-amber-500 outline-0"/>
        </div>
        <Listbox v-model="typesSelected" multiple>
            <div class="relative">
                <ListboxButton class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none
                    focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75
                    focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
                >
                    <span class="block truncate">{{
                            typesSelected.length > 0 ? typesSelected.map(type => type).join(', ') : 'Search by type'
                        }} </span>
                    <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <span class="material-symbols-outlined">unfold_more</span>
                </span>
                </ListboxButton>
                <transition
                    leave-active-class="transition duration-100 ease-in"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                >
                    <ListboxOptions
                        class="absolute z-50 mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        <ListboxOption v-slot="{ active, selected }" v-for="type in Object.keys(colorFromType())"
                                       :key="type" :value="type">
                            <li :class="[active ? 'bg-amber-100 text-amber-900' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-10 pr-4']">
                            <span :class="[selected ? 'font-medium' : 'font-normal', 'block truncate']">
                                {{ type }}
                            </span>
                                <span v-if="selected"
                                      class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <span class="material-symbols-outlined">check</span>
                            </span>
                            </li>
                        </ListboxOption>
                    </ListboxOptions>
                </transition>
            </div>
        </Listbox>
    </div>
</template>
