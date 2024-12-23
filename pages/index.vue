<script lang="tsx" setup>
import Tabs from "~/components/assets/Tabs.vue";
import type { Address } from "~/components/pages/home/FormAddress.vue";
import type { ShowAddressProps } from "~/components/pages/home/ShowAddress/ShowAddress.vue";

const meta = {
  description:
    "Busque informações como rua, bairro, cidade, etc., sobre todos os CEPs do Brasil!",
};

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

watch(router, () => {
  currentValue.value = null;
});
</script>

<template>
  <Head>
    <Title>BuscaCEP | Informações de CEP</Title>
    <Meta name="description" :content="meta.description" />
  </Head>

  <h1 class="tw-sr-only">
    Busque informações como rua, bairro, cidade, etc., sobre todos os CEPs do
    Brasil!
  </h1>

  <div>
    <div class="tw-text-sm tw-text-gray-500 tw-text-center tw-mb-1">
      Buscar por
    </div>
    <Tabs :tabs="['CEP', 'Rua']" v-slot="{ tab }">
      <FormCEP v-if="tab === 0" @change="handleCEPChange" />
      <FormAddress v-else-if="tab === 1" @change="handleAddressChange" />
    </Tabs>
  </div>

  <template v-if="currentValue">
    <ShowAddress :mode="currentValue?.mode" :value="currentValue?.value" />
  </template>
</template>
