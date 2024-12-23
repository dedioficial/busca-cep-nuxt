<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
useHead({
  meta: [
    {
      name: "og:image",
      content:
        "https://buscacep.mathandrade.com/images/logo/apple-touch-icon.png",
    },
    { name: "og:url", content: "https://buscacep.mathandrade.com/" },
    { name: "og:type", content: "website" },
    { name: "theme-color", content: "#dafff8" },
    { name: "apple-mobile-web-app-status-bar-style", content: "#dafff8" },
    { name: "top-bar-ms", content: "#dafff8" },
  ],
});
</script>
