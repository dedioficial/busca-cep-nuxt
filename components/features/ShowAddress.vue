<script lang="tsx" setup>
import { ProgressSpinner } from "primevue";
import { getCEPUrl, type ViaCEPResponse } from "~/api/viaCEP";

const props = defineProps<{ cep: null | string }>();

const { status, data: address } = useLazyFetch<ViaCEPResponse>(
  () => getCEPUrl(props.cep),
  {
    server: false,
    immediate: false,
    watch: [props],
  }
);

const pending = computed(() => status.value === "pending");
</script>

<template>
  <div class="tw-text-center" v-if="pending">
    <ProgressSpinner
      style="width: 50px; height: 50px"
      strokeWidth="8"
      fill="transparent"
      animationDuration=".5s"
      aria-label="Buscando informações do endereço."
    />
  </div>
  <div v-else-if="address">
    <ErrorMessage v-if="address?.erro" />
    <div
      class="tw-flex max-md:tw-flex-col tw-max-w-6xl tw-w-[90dvw] tw-grid-cols-2 tw-gap-10 tw-m-auto tw-items-center tw-justify-center"
      v-else
    >
      <Map :address />
      <AddressInformations :address />
    </div>
  </div>
</template>
