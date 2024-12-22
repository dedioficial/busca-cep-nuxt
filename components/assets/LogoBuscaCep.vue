<template>
  <div class="tw-flex tw-gap-1 tw-items-center">
    <img
      src="/images/logo/logo.png"
      alt="BuscaCEP Logo"
      class="tw-h-full tw-max-h-16"
    />
    <div class="logo">
      <span class="busca">Busca</span><span class="cep">CEP</span>
    </div>
  </div>
</template>

<style scoped>
.logo {
  @apply tw-font-extrabold;
  @apply -tw-skew-x-12;
  @apply tw-text-5xl;
  @apply tw-scale-x-[90%];
}

.busca,
.cep {
  text-shadow: 1px 1px 0px var(--shadow-color), 2px 2px 0px var(--shadow-color),
    3px 3px 0px var(--shadow-color);
}

.busca {
  @apply tw-text-[#1fc1a2];
  --shadow-color: #136457;
}

.cep {
  @apply tw-text-[#ed4040];
  --shadow-color: #5c1616;
}
</style>
