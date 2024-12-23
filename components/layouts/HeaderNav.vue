<template>
  <header class="header">
    <nav>
      <ul class="tw-flex tw-gap-6 tw-justify-center">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">Sobre</NuxtLink></li>
      </ul>
    </nav>
    <p>
      <a href="https://github.com/dedioficial/busca-cep-nuxt/" target="_blank">
        <span class="pi pi-github !tw-text-2xl"></span
      ></a>
    </p>
  </header>
</template>

<style scoped>
.header {
  @apply tw-text-center;
  @apply tw-flex;
  @apply tw-w-full;
  @apply tw-max-w-5xl;
  @apply tw-justify-between;
  @apply tw-m-auto;
  @apply tw-gap-5;
}
</style>
