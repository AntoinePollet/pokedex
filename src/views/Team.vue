<script lang="ts">
import Pokemon from "@/components/Pokemon.vue";
import { defineComponent } from "vue";
import { storeToRefs } from "pinia";
import { useTeamStore } from "@/stores/team";

export default defineComponent({
    name: "Team",
    components: { Pokemon },
    setup() {
        const teamStore = useTeamStore();
        const { team } = storeToRefs(teamStore);

        return { team }
    }
})
</script>

<template>
    <div v-if="team.length > 0" class="grid grid-cols-2 gap-4 pt-10">
        <pokemon v-for="pokemon in team" :pokemon="pokemon" />
    </div>
</template>

