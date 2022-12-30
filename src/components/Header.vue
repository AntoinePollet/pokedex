<template>
    <div class="h-[64px] w-full bg-amber-300 dark:bg-dark-1 border-b border-solid border-dark-3 fixed z-50">
        <div class="flex items-center h-full italic leading-loose text-lg relative w-full">
            <div class="flex gap-x-3 absolute left-1/2 top-1/2" style="transform: translate(-50%, -50%);">
                <router-link class="hover:text-amber-800 font-bold dark:text-white dark:hover:text-amber-300" to="/">Pokedex</router-link>
                <div class="flex items-center gap-x-1">
                    <router-link class="hover:text-amber-800 font-bold dark:text-white dark:hover:text-amber-300" to="/team">Team</router-link>
                    <badge :badge-number="teamSize" />
                </div>
            </div>
            <div class="flex ml-auto gap-x-3 pr-3">
                <div class="flex items-center">
                    <span v-if="isDark" @click="toggleDark()" class="material-symbols-outlined cursor-pointer text-white">
                        light_mode
                    </span>
                    <span v-else @click="toggleDark()" class="material-symbols-outlined cursor-pointer">
                        dark_mode
                    </span>
                </div>
                <clear-team-button />
                <generate-team-button />
            </div>
        </div>
    </div>
</template>

<style>
.router-link-active {
    @apply text-amber-800 dark:text-dark-contrast;
}
</style>
<script lang="ts">
import ClearTeamButton from "@/components/ClearTeamButton.vue";
import GenerateTeamButton from "@/components/GenerateTeamButton.vue";
import Badge from "@/components/Badge.vue";
import { useTeamStore } from "@/stores/team";
import { storeToRefs } from "pinia";
import { useToggle, useDark } from "@vueuse/core";

export default {
    components: { GenerateTeamButton, ClearTeamButton, Badge },
    setup() {
        const teamStore = useTeamStore();
        const { teamSize } = storeToRefs(teamStore);

        const isDark = useDark();
        const toggleDark = useToggle(isDark);

        return { teamSize, toggleDark, isDark }
    }
}
</script>
