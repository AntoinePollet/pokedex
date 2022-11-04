<script lang="ts">
import { defineComponent, onMounted, reactive, ref, watch } from "vue";
import { colorFromType } from "@/utilities/pokemonUtilities";
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from "@headlessui/vue"
import localStorage from "@/composables/localStorage";
import { usePokedexStore } from "@/stores/pokedex";

export default defineComponent({
    components: { Listbox, ListboxOption, ListboxOptions, ListboxButton },
    emits: ['loading'],
    setup(props, { emit }) {
        const pokedexStore = usePokedexStore();
        const { getFilteredPokemons } = pokedexStore;
        const storage = localStorage();
        const { addFiltersToStorage } = storage;
        const { filters } = localStorage();

        const filter = reactive({
            search: '',
            types: []
        });

        let timer: any;

        const filterPokemons = (event: any) => {
            clearTimeout(timer);
            timer = setTimeout(async () => {
                emit('loading', true);
                await getFilteredPokemons(filter.search, filter.types);
                emit('loading', false);
            }, 1000);
        }

        watch(() => filter.types,
            async (value, oldValue) => {
            if (value) {
                addFiltersToStorage(filter);
                emit('loading', true);
                await getFilteredPokemons(filter.search, filter.types);
                emit('loading', false);
            }
        });

        onMounted(() => {
            filter.search = filters.value.search;
            filter.types = filters.value.types;
        });

        return { filter, colorFromType, filterPokemons }
    }
});
</script>

<template>
    <div class="flex">
        <div>
            <input v-model="filter.search" @input="filterPokemons" type="search" autocomplete="off" placeholder="Search by name ..."
                   class="border bg-gray-50 border-gray-300 text-gray-900 font-mono rounded-md p-2 text-sm
                   placeholder-gray-400 focus:ring-amber-500 focus:border-amber-500 outline-0"/>
        </div>
        <Listbox v-model="filter.types" multiple>
            <div class="relative">
                <ListboxButton class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none
                    focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75
                    focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
                >
                    <span class="block truncate">{{
                            filter.types.length > 0 ? filter.types.map(type => type).join(', ') : 'Search by type'
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
