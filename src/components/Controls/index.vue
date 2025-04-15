<template>
  <div :class="$style.controls">
    <div :class="$style.controlsBlock">
      <div :class="$style.controlsBlockTitle">Строй инструмента</div>
      <TuningChanger />
    </div>

    <div :class="$style.controlsBlock">
      <div :class="$style.controlsBlockTitle">Звуковой ряд</div>
      <ScaleChanger />
    </div>
  </div>
</template>

<script setup lang="ts">
import TuningChanger from './partials/TuningChanger.vue'
import ScaleChanger from './partials/ScaleChanger.vue'
</script>

<style lang="less" module>
.controls {
  padding: 12px;
  display: flex;
  gap: 12px;
  justify-content: space-around;
  flex-wrap: wrap;
}
// .controlsBlock {
// }
.controlsBlockTitle {
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 12px;
}
</style>
