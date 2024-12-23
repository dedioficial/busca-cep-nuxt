<script lang="tsx" setup>
import Tabs from "~/components/assets/Tabs.vue";
import type { Address } from "~/components/pages/home/FormAddress.vue";
import type { ShowAddressProps } from "~/components/pages/home/ShowAddress/ShowAddress.vue";

const meta = {
  title: "BuscaCEP | Informações de CEP",
  description:
    "Busque informações como rua, bairro, cidade, etc., sobre todos os CEPs do Brasil!",
};

useHead({
  title: meta.title,
  meta: [
    { name: "description", content: meta.description },
    { name: "og:title", content: meta.title },
    { name: "og:description", content: meta.description },
  ],
});

const currentValue = ref<ShowAddressProps | null>(null);
const router = useRoute();

const handleCEPChange = (cep: string) => {
  currentValue.value = {
    mode: "cep",
    value: cep,
  };
};

const handleAddressChange = (address: Address) => {
  currentValue.value = {
    mode: "address",
    value: address,
  };
};

const handleResetForm = () => {
  currentValue.value = null;
};

watch(router, handleResetForm);
</script>

<template>
  <h1 class="tw-sr-only">
    Busque informações como rua, bairro, cidade, etc., sobre todos os CEPs do
    Brasil!
  </h1>

  <div>
    <div class="tw-text-sm tw-text-gray-500 tw-text-center tw-mb-1">
      Buscar por
    </div>
    <Tabs :tabs="['CEP', 'Logradouro']" v-slot="{ tab }">
      <FormCEP
        v-if="tab === 0"
        @change="handleCEPChange"
        @reset="handleResetForm"
      />
      <FormAddress
        v-else-if="tab === 1"
        @change="handleAddressChange"
        @reset="handleResetForm"
      />
    </Tabs>
  </div>

  <template v-if="currentValue">
    <ShowAddress :mode="currentValue?.mode" :value="currentValue?.value" />
  </template>
</template>
