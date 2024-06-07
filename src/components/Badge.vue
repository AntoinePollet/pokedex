<script setup lang="ts">
import { toRefs, type PropType } from 'vue';

const props = defineProps({
  badgeNumber: {
    type: Number as PropType<number>,
    default: 0,
  },
});

const { badgeNumber } = toRefs(props);
</script>

<template>
  <div class="relative w-5 h-5 rounded-full bg-primary-600 text-white text-center font-semibold text-sm flex items-center justify-center">
    <span class="absolute font-bold text-sm left-1">{{ badgeNumber }}</span>
  </div>
</template>
