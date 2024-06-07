<script setup lang="ts">
import type { PropType } from 'vue';
import { defineComponent } from 'vue';

const props = defineProps({
  badgeNumber: {
    type: Number as PropType<number>,
    default: 0,
  },
});

const { badgeNumber } = props;
</script>

<template>
  <div class="bg-white text-primary-700 rounded text-sm h-[20px] w-[20px] flex justify-center items-center font-bold">
    {{ badgeNumber }}
  </div>
</template>
