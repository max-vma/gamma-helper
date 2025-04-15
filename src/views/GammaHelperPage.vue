<template>
  <div :class="$style.gammaHelperPage">
    <div :class="$style.gammaHelperPageInner">
      <Controls />
      <GuitarNeck />
    </div>
  </div>
</template>

<script setup lang="ts">
import GuitarNeck from '@/components/GuitarNeck/index.vue'
import Controls from '@/components/Controls/index.vue'
</script>

<style lang="less" module>
.gammaHelperPage {
  padding: 16px;
  height: 100%;
  display: flex;
  justify-content: center;
}
.gammaHelperPageInner {
  min-width: 80%;
}
</style>
