<template>
  <div :class="$style['gamma-helper-page']">
    <div :class="$style['gamma-helper-page-inner']">
      <Controls />
      <GuitarNeck />
    </div>
  </div>
</template>

<script setup lang="ts">
import GuitarNeck from '@/components/GuitarNeck/index.vue';
import Controls from '@/components/Controls/index.vue';
import { useHead } from '@vueuse/head';

useHead;
</script>

<style lang="less" module>
.gamma-helper-page {
  padding: 16px;
  height: 100%;
  display: flex;
  justify-content: center;
}
.gamma-helper-page-inner {
  min-width: 80%;
}
</style>
