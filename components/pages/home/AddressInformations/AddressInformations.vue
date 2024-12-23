<script lang="ts" setup>
import type { Address } from "~/api/viaCEP";

interface AddressInformationsProps {
  address: Address;
  backButton?: boolean;
}

const props = defineProps<AddressInformationsProps>();

const keysVisible = {
  cep: "CEP",
  logradouro: "Logradouro",
  bairro: "Bairro",
  localidade: "Cidade",
  estado: "Estado",
};

const keyArrays = Object.keys(keysVisible);

const emit = defineEmits<{
  back: [];
}>();

const handleOnBack = () => {
  emit("back");
};
</script>

<template>
  <div class="tw-text-2xl tw-text-gray-700 tw-font-light">
    <h2 class="tw-text-emerald-600 tw-font-bold tw-mb-2">
      <span class="pi pi-map-marker"></span>
      Endereço encontrado!
    </h2>

    <table>
      <template v-for="key of keyArrays">
        <tr
          v-if="props.address?.[key as keyof Address]"
          class="tw-items-center"
        >
          <td class="tw-text-xs">
            {{ keysVisible[key as keyof typeof keysVisible] }}
          </td>
          <td class="tw-ps-3 max-md:tw-text-lg">
            {{ props.address[key as keyof Address] }}
          </td>
        </tr>
      </template>
    </table>

    <Button
      variant="outlined"
      severity="secondary"
      label="Voltar a lista"
      icon="pi pi-angle-left"
      class="!tw-py-0 !tw-mt-3"
      size="small"
      v-if="props.backButton"
      @click="handleOnBack"
    />
  </div>
</template>
