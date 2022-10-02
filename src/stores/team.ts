import { defineStore } from 'pinia'
import { ref } from "vue";

export const useTeamStore = defineStore('team', () => {

    const team = ref([]);

    return { team }
});
