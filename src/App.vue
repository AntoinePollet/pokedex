
<template>
    <Header />
    <div class="pt-[64px] w-[80%] m-auto">
        <RouterView/>
    </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from "@/components/Header.vue";
</script>

<style scoped>

</style>
