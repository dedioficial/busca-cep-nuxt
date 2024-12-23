<script lang="tsx" setup>
import { ProgressSpinner } from "primevue";
import { getAddressURL, getCEPUrl, type ViaCEPResponse } from "~/api/viaCEP";
import type { Address } from "../FormAddress.vue";

export interface ShowAddressProps {
  mode: "cep" | "address";
  value: string | Address;
}

const props = defineProps<ShowAddressProps>();

const { status, data: address } = useLazyFetch<ViaCEPResponse>(
  () =>
    props.mode === "cep"
      ? getCEPUrl(props.value as string)
      : getAddressURL(props.value as Address),
  {
    server: false,
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
  <template v-else-if="address">
    <ErrorMessage
      v-if="address?.erro"
      text="O endereço do CEP digitado não foi encontrado."
    />
    <MultipleAddresses
      v-else-if="Array.isArray(address)"
      :addresses="address"
    />
    <AddressMap v-else-if="address?.cep" :address />
  </template>
</template>
