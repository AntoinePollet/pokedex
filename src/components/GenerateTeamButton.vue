<script lang="ts">
import { defineComponent } from "vue";
import { useTeamStore } from "@/stores/team";

export default defineComponent({
    setup() {
        const teamStore = useTeamStore();
        const { generateTeam } = teamStore;
        const generateRandomTeam = () => {
            generateTeam();
        }

        return { generateRandomTeam }
    }
});
</script>


<template>
    <div>
        <button @click="generateRandomTeam">Generate</button>
    </div>
</template>
