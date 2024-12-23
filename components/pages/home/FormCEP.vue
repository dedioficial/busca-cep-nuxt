<script setup lang="ts">
import { Form, type FormSubmitEvent } from "@primevue/forms";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { Button, Message } from "primevue";
import { cepSchema } from "~/utils/zodSchemas/cep";

const emit = defineEmits<{
  change: [cep: string];
}>();

const resolver = ref(zodResolver(cepSchema));

const formSubmited = ref(false);

const handleOnSubmit = (event: FormSubmitEvent) => {
  formSubmited.value = true;

  if (!event.valid) return;

  emit("change", event.values?.cep);
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
      <InputCEP
        id="cep"
        name="cep"
        class="tw-w-full"
        :invalid="$form?.cep?.invalid"
      />

      <Message
        v-if="$form?.cep?.invalid"
        severity="error"
        size="small"
        variant="simple"
        >{{ $form?.cep?.error?.message }}</Message
      >
    </div>

    <Button label="Buscar" class="tw-w-full tw-mt-2" type="submit" />
  </Form>
</template>
