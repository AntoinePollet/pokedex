<script lang="ts">
import type { PropType } from "vue";
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        badgeNumber: {
            type: Number as PropType<number>,
            default: 0
        }
    }
})
</script>

<template>
    <div
        class="bg-white text-amber-700 rounded text-sm h-[20px] w-[20px] flex justify-center items-center font-bold">
        {{ badgeNumber }}
    </div>
</template>
