<template>
  <div :class="$style['fretboard-scales-page']">
    <div :class="$style['fretboard-scales-page-inner']">
      <Controls />
      <GuitarNeck />
    </div>
  </div>
</template>

<script setup lang="ts">
import GuitarNeck from '@/components/GuitarNeck/index.vue';
import Controls from '@/components/Controls/index.vue';
import { useTitle } from '@vueuse/core';

useTitle('Визуализатор музыкальных гамм для струнных инструментов');
</script>

<style lang="less" module>
.fretboard-scales-page {
  padding: 16px;
  height: 100%;
  display: flex;
  justify-content: center;
}
.fretboard-scales-page-inner {
  min-width: 80%;
}
</style>
