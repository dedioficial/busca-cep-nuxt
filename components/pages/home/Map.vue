<template>
  <iframe
    width="450"
    height="250"
    frameborder="0"
    style="border: 0"
    referrerpolicy="no-referrer-when-downgrade"
    :src="`https://www.google.com/maps/embed/v1/place?key=${config.public.googleMapsApiKey}&q=${address.cep}&language=pt_BR`"
    allowfullscreen
    v-if="address?.cep"
    class="map"
  >
  </iframe>
</template>

<script lang="ts" setup>
import type { Address } from "~/api/viaCEP";

const config = useRuntimeConfig();

const { address } = defineProps<{ address: Address }>();
</script>

<style lang="css" scoped>
.map {
  @apply tw-rounded-2xl;
  @apply tw-shadow-xl;
  @apply tw-w-full;
  @apply tw-max-w-96;
  @apply max-md:tw-order-2;
}
</style>
