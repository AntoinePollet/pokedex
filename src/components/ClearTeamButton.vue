<script lang="ts">
import { defineComponent } from "vue";
import { useTeamStore } from "@/stores/team";

export default defineComponent({
    setup() {
        const teamStore = useTeamStore();
        const { resetTeam } = teamStore;
        const clearTeam = () => {
            resetTeam();
        }

        return { clearTeam }
    }
});
</script>


<template>
    <div>
        <button @click="clearTeam">Reset</button>
    </div>
</template>
