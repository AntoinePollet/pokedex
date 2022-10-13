
<template>
    <Header />
    <div class="pt-[64px] w-[80%] m-auto">
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { createToast } from "mosha-vue-toastify";
import { usePokedexStore } from "@/stores/pokedex";
import localStorage from "@/composables/localStorage";
import Header from "@/components/Header.vue";

export default defineComponent({
    components: { Header },
    setup() {
        const pokedexStore = usePokedexStore();
        const { getFilteredPokemons } = pokedexStore;

        const storage = localStorage();
        const { filters } = storage;

        onMounted(async () => {
            try {
                await getFilteredPokemons(filters.value.search, filters.value.types);
            } catch (e: any) {
                createToast('Error while fetching data', { type: "danger", position: "bottom-right" });
            }
        });
    }
})
</script>

<style scoped>

</style>
