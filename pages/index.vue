<template>
  <NaiveConfig>
    <div class="h-screen flex justify-center items-center flex-col gap-2">
      <NButton type="primary"><div class="i-mdi:access-point" /></NButton>
      <NAlert class="w-2xl" type="info">
        <pre>  {{ store.$state }}</pre>
      </NAlert>
    </div>
  </NaiveConfig>
</template>

<script setup lang="ts">
const store = useMainStore()
</script>
