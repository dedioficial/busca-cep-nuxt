<script lang="ts" setup>
const { text } = defineProps<{ text: string }>();
</script>

<template>
  <div class="tw-flex tw-flex-col tw-items-center tw-gap-3">
    <span class="pi pi-times tw-text-red-500 !tw-text-5xl"></span>
    <p class="tw-text-gray-700 tw-font-semibold tw-text-xl">
      {{ text }}
    </p>
  </div>
</template>
