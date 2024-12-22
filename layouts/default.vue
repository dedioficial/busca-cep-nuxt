<template>
  <div class="wrapper">
    <div>
      <LogoBuscaCep />
      <slot />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  @apply tw-flex;
  @apply tw-w-dvw;
  @apply tw-min-h-dvh;
  @apply tw-items-center;
  @apply tw-justify-center;
  @apply tw-p-10;
}

.wrapper > div {
  @apply tw-flex;
  @apply tw-flex-col;
  @apply tw-gap-10;
}
</style>
