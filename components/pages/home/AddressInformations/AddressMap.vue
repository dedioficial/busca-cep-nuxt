<template>
  <div
    class="tw-flex max-md:tw-flex-col tw-max-w-6xl tw-w-[90dvw] tw-grid-cols-2 tw-gap-10 tw-m-auto tw-items-center tw-justify-center"
  >
    <Map :address />
    <AddressInformations
      :address
      :back-button="props.backButton"
      @back="handleOnBack"
    />
  </div>
</template>

<script lang="ts" setup>
import type { ViaCEPResponse } from "~/api/viaCEP";

const { address, ...props } = defineProps<{
  address: ViaCEPResponse;
  backButton?: boolean;
}>();

const emit = defineEmits<{
  back: [];
}>();

const handleOnBack = () => {
  emit("back");
};
</script>
