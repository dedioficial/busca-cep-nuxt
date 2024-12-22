<script lang="tsx" setup>
import { InputMask } from "primevue";

interface InputCEPProps {
  id?: string;
  class?: string;
  name?: string;
}

const {
  id = "cep",
  name = "cep",
  class: className,
  ...props
} = defineProps<InputCEPProps>();

const cep = ref("");
</script>

<template>
  <FloatLabel variant="on">
    <InputMask
      v-model="cep"
      :id="id"
      :name
      :class="className"
      v-bind="props"
      mask="99999-999"
    />

    <label for="cep">CEP</label>
  </FloatLabel>
</template>
