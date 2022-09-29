<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from "@/components/Header.vue";
</script>

<template>
    <Header />
    <div class="pt-[64px] w-[80%] m-auto">
        <RouterView/>
    </div>
</template>

<style scoped>

</style>
