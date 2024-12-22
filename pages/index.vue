<script lang="tsx" setup>
const meta = {
  description:
    "Busque informações como rua, bairro, cidade, etc., sobre todos os CEPs do Brasil!",
};

const currentCEP = ref<string | null>("");
const handleCEPChange = (cep: string) => {
  currentCEP.value = cep;
};
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

  <FormCEP @change="handleCEPChange" />

  <ShowAddress :cep="currentCEP" />
</template>
