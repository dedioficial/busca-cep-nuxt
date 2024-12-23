<script setup lang="ts">
import { Form, type FormSubmitEvent } from "@primevue/forms";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { Button, Message } from "primevue";
import brazilianStates from "~/api/brazillianStates";
import { addressSchema } from "~/utils/zodSchemas/address";

export type Address = {
  logradouro: string;
  localidade: string;
  estado: string;
};

const emit = defineEmits<{
  change: [address: Address];
  reset: [];
}>();

const formValues = reactive({
  logradouro: "",
  localidade: "",
  estado: "",
});

const resolver = ref(zodResolver(addressSchema));

const formSubmited = ref(false);

const handleOnSubmit = (event: FormSubmitEvent) => {
  formSubmited.value = true;

  if (!event.valid) return;

  emit("change", event.values as Address);
};

const handleOnReset = () => {
  formSubmited.value = false;
  formValues.estado = "";
  formValues.localidade = "";
  formValues.logradouro = "";
  emit("reset");
};
</script>

<template>
  <Form
    v-slot="$form"
    :resolver
    class="tw-w-full tw-max-w-80 tw-flex tw-gap-3 tw-flex-col tw-m-auto"
    @submit="handleOnSubmit"
    validateOnSubmit
    :validateOnBlur="false"
    :validateOnMount="false"
    :validateOnValueUpdate="formSubmited"
    novalidate
  >
    <div>
      <FloatLabel variant="on">
        <Select
          v-model="formValues.estado"
          :options="brazilianStates"
          optionLabel="name"
          default-value=""
          optionValue="code"
          id="estado"
          name="estado"
          class="tw-w-full"
        />
        <label for="estado">Estado</label>
      </FloatLabel>

      <Message
        v-if="$form?.estado?.invalid"
        severity="error"
        size="small"
        variant="simple"
        >{{ $form?.estado?.error?.message }}</Message
      >
    </div>

    <div>
      <FloatLabel variant="on">
        <InputText
          id="localidade"
          name="localidade"
          v-model="formValues.localidade"
          default-value=""
          class="tw-w-full"
          :invalid="$form?.localidade?.invalid"
        />
        <label for="localidade">Cidade</label>
      </FloatLabel>

      <Message
        v-if="$form?.localidade?.invalid"
        severity="error"
        size="small"
        variant="simple"
        >{{ $form?.localidade?.error?.message }}</Message
      >
    </div>

    <div>
      <FloatLabel variant="on">
        <InputText
          id="logradouro"
          name="logradouro"
          v-model="formValues.logradouro"
          default-value=""
          class="tw-w-full"
          :invalid="$form?.logradouro?.invalid"
        />

        <label for="logradouro">Rua / Avenida / Logradouro</label>
      </FloatLabel>

      <Message
        v-if="$form?.logradouro?.invalid"
        severity="error"
        size="small"
        variant="simple"
        >{{ $form?.logradouro?.error?.message }}</Message
      >
    </div>

    <Button label="Buscar" class="tw-w-full tw-mt-3" type="submit" />

    <Button
      label="Reiniciar"
      class="tw-w-fit tw-ms-auto !tw-py-1- !tw-text-xs"
      variant="outlined"
      @click="
        () => {
          handleOnReset();
          $form.reset();
        }
      "
    />
  </Form>
</template>
