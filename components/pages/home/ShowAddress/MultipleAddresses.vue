<script lang="ts" setup>
import type { ViaCEPResponse } from "~/api/viaCEP";

const { addresses } = defineProps<{ addresses: ViaCEPResponse[] }>();

const selectedAddress = ref<ViaCEPResponse | null>(null);

const resetSelectedAddress = () => {
  selectedAddress.value = null;
};
</script>

<template>
  <ErrorMessage
    v-if="addresses.length === 0"
    text="Nenhum endereço com as informações digitadas foram encontrados."
  />
  <template v-else>
    <div v-if="!selectedAddress" class="tw-flex tw-flex-col tw-gap-4">
      <h2 class="tw-text-emerald-600 tw-font-bold tw-text-center tw-text-2xl">
        <span class="pi pi-map-marker !tw-text-2xl"></span>
        Endereços encontrados!
      </h2>
      <p class="tw-text-sm tw-text-gray-500 tw-text-center tw-mb-5">
        Clique no endereço para mais informações.
      </p>

      <DataTable
        :value="addresses"
        class="tw-w-dvw tw-max-w-4xl table"
        :scrollable="true"
        v-model:selection="selectedAddress"
        selectionMode="single"
      >
        <Column
          body-class="!tw-whitespace-nowrap"
          header-class="!tw-whitespace-nowrap"
          field="cep"
          header="CEP"
        ></Column>
        <Column
          body-class="!tw-whitespace-nowrap"
          header-class="!tw-whitespace-nowrap"
          field="logradouro"
          header="Logradouro"
        ></Column>
        <Column
          body-class="!tw-whitespace-nowrap"
          header-class="!tw-whitespace-nowrap"
          field="bairro"
          header="Bairro"
        ></Column>
        <Column
          body-class="!tw-whitespace-nowrap"
          header-class="!tw-whitespace-nowrap"
          field="localidade"
          header="Cidade"
        ></Column>
        <Column
          body-class="!tw-whitespace-nowrap"
          header-class="!tw-whitespace-nowrap"
          field="estado"
          header="Estado"
        ></Column>
      </DataTable>
    </div>
    <template v-else>
      <AddressMap
        :address="selectedAddress"
        :back-button="true"
        @back="resetSelectedAddress"
      />
    </template>
  </template>
</template>
