<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <HeaderNav />

    <div class="content">
      <div class="tw-flex tw-gap-10 tw-flex-col">
        <LogoBuscaCep />
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  @apply tw-flex;
  @apply tw-flex-col;
  @apply tw-w-dvw;
  @apply tw-min-h-dvh;
  @apply tw-items-center;
  @apply tw-justify-center;
  @apply tw-p-10;
}

.content {
  @apply tw-flex;
  @apply tw-grow;
  @apply tw-flex-col;
  @apply tw-gap-10;
  @apply tw-items-center;
  @apply tw-justify-center;
}
</style>
