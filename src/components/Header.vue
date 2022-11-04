<template>
    <div class="h-[64px] w-full bg-amber-300 fixed z-50">
        <div class="flex items-center h-full italic leading-loose text-lg relative w-full">
            <div class="flex gap-x-3 absolute left-1/2 top-1/2" style="transform: translate(-50%, -50%);">
                <router-link class="hover:text-amber-800 font-bold" to="/">Pokedex</router-link>
                <div class="flex items-center gap-x-1">
                    <router-link class="hover:text-amber-800 font-bold" to="/team">Team</router-link>
                    <badge :badge-number="teamSize" />
                </div>
            </div>
            <div class="flex ml-auto gap-x-3 pr-3">
                <clear-team-button />
                <generate-team-button />
            </div>
        </div>
    </div>
</template>

<style>
.router-link-active {
    @apply text-amber-800;
}
</style>
<script lang="ts">
import ClearTeamButton from "@/components/ClearTeamButton.vue";
import GenerateTeamButton from "@/components/GenerateTeamButton.vue";
import Badge from "@/components/Badge.vue";
import { useTeamStore } from "@/stores/team";
import { storeToRefs } from "pinia";

export default {
    components: { GenerateTeamButton, ClearTeamButton, Badge },
    setup(){
        const teamStore = useTeamStore();
        const { teamSize } = storeToRefs(teamStore);

        return { teamSize }
    }
}
</script>
