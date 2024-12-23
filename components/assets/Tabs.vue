<script lang="ts" setup>
const { tabs } = defineProps<{ tabs: string[] }>();
const route = useRoute();

const selectedTab = ref(Number(route.query?.tab ?? 0));

watch(route, () => {
  const searchParams = route.query;
  selectedTab.value = Number(searchParams?.tab ?? 0);
});
</script>

<template>
  <div
    v-if="tabs.length > 0"
    class="tabs"
    :style="{
      'grid-template-columns': `repeat(${tabs.length}, minmax(0, 1fr))`,
    }"
  >
    <template v-for="(tab, index) in tabs">
      <NuxtLink
        :to="`?${index === 0 ? '' : `tab=${index}`}`"
        :class="`${selectedTab === index ? 'active' : ''}`"
        >{{ tab }}</NuxtLink
      >
    </template>
  </div>

  <slot :tab="selectedTab"></slot>
</template>

<style scoped>
.tabs {
  @apply tw-m-auto;
  @apply tw-grid;
  @apply tw-rounded-full;
  @apply tw-bg-emerald-900;
  @apply tw-text-white;
  @apply tw-text-center;
  @apply tw-items-center;
  @apply tw-overflow-hidden;
  @apply tw-mb-5;
  @apply tw-w-fit;
}

.tabs > a {
  @apply tw-px-5;
  @apply tw-py-1;
  @apply tw-transition-all;
}

.tabs > a:hover,
.tabs > .active {
  @apply tw-bg-emerald-500;
}
</style>
