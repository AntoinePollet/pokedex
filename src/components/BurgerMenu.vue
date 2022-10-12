<script lang="ts">
import { defineComponent, onMounted, ref, toRefs, watch } from "vue";
import { useTeamStore } from "@/stores/team";
import { pokemonSprite } from "@/utilities/pokemonUtilities";
import { Swappable } from "@shopify/draggable";
import localStorage from "../composables/localStorage"

export default defineComponent({
    name: "BurgerMenu",
    setup() {
        const teamStore = useTeamStore();
        const storage = localStorage();
        const { pokemonTeam } = storage;
        const { addAndReplaceInStorage } = storage;
        const { addAndReplace } = teamStore;
        const { pokemonIndex } = teamStore;

        let lastSwappableIndexElement: number | null = null;

        onMounted(() => {
            const swappable = new Swappable(document.querySelectorAll(".container"), {
                draggable: ".item",
            });

            swappable.on("swappable:start", (e) => console.log(e));

            swappable.on("swappable:swapped", (e) => {
                const { swappedElement } = e;
                lastSwappableIndexElement = swappedElement.dataset["index"];
            });

            swappable.on("swappable:stop", async (e) => {
                const sourceElement = e.data.dragEvent.originalSource.dataset["index"];
                if (lastSwappableIndexElement != null) {
                    addAndReplace(sourceElement, lastSwappableIndexElement);
                    addAndReplaceInStorage(sourceElement, lastSwappableIndexElement);
                }
            });
        });
        return { pokemonTeam, pokemonSprite, pokemonIndex }
    }
})
</script>


<template>
    <div class="overflow-y-auto h-full w-[20rem] left-0 bottom-0 top-[64px] fixed bg-amber-50 z-20">
        <div class="grid grid-cols-2 container">
            <div v-for="pokemon in pokemonTeam" class="flex justify-center item" :data-index="pokemonIndex(pokemon.id)">
                <img :src="pokemonSprite(pokemon.id)"  :alt="pokemon.name"/>
            </div>
            <div class="dropzone border">

            </div>
        </div>
    </div>
</template>

