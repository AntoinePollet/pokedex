<script lang="ts">
import { defineComponent } from "vue";
import { storeToRefs } from "pinia";
import { useTeamStore } from "@/stores/team";
import PokemonTeam from "@/components/PokemonTeam.vue";

export default defineComponent({
    name: "Team",
    components: { PokemonTeam },
    setup() {
        const teamStore = useTeamStore();
        const { team } = storeToRefs(teamStore);

        return { team }
    }
})
</script>

<template>
    <div v-if="team.length > 0" class="grid grid-cols-3 gap-4 py-10">
        <pokemon-team v-for="pokemon in team" :pokemon="pokemon" />
    </div>
    <div v-else class="italic text-3xl font-mono font-bold text-center py-10">
        No team member, yet !
    </div>
</template>

