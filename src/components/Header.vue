<template>
    <div class="h-[64px] w-full bg-amber-300 fixed z-50">
        <div class="flex h-full justify-center gap-x-3 items-center italic leading-loose text-lg relative">
            <router-link to="/" class="absolute left-5 top-1/2 w-[32px] h-[32px]" style="transform: translateY(-50%);">
                <img src="../assets/pokeball.svg" width="32" height="32" />
            </router-link>
            <router-link class="hover:text-amber-800 font-bold" to="/pokedex" >Pokedex</router-link>
            <router-link class="hover:text-amber-800 font-bold" to="/team" >Team</router-link>
        </div>
    </div>
</template>

<style>
.router-link-active {
    @apply text-amber-800;
}
</style>
