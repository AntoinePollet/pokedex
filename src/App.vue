<template>
    <Header />
    <div class="h-full">
        <div class="pt-[64px] min-h-screen flex">
            <BurgerMenu v-if="burgerOpened" />
            <div class="w-[80%] mx-auto" :style="burgerOpened ? 'padding-left: 20rem' : '' ">
                <RouterView/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from "@/components/Header.vue";
import BurgerMenu from "@/components/BurgerMenu.vue";
import { burgerOpened } from "@/composables/burgerMenu";
</script>

<style>
#app {
    min-height: 100vh;
}
</style>
