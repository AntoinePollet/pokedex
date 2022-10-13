<template>
    <div class="h-[64px] w-full bg-amber-300 fixed z-50">
        <div class="flex h-full justify-center gap-x-3 items-center italic leading-loose text-lg relative">
            <div class="absolute left-5 top-1/2 w-[32px] h-[32px] cursor-pointer" style="transform: translateY(-50%);">
                <span class="material-symbols-outlined">
                    menu
                </span>
            </div>
            <router-link class="hover:text-amber-800 font-bold" to="/" >Pokedex</router-link>
            <router-link class="hover:text-amber-800 font-bold" to="/team" >Team</router-link>
            <div>
                <ClearTeamButton />
                <GenerateTeamButton />
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
export default {
    components: { GenerateTeamButton, ClearTeamButton }
}
</script>
