<template>
  <div class="neck">
    <neck-string
      v-for="(note, index) in tuningStore.notes"
      :tuning-note="note"
      :key="index" />
  </div>
</template>

<script setup lang="ts">
import NeckString from './partials/string.vue'
import { useTuningStore } from '@/stores/tuning'
const tuningStore = useTuningStore()
</script>

<style lang="less">
.neck {
  position: relative;
  width: 100%;
  padding-top: 40px;
  &__tune-changer {
    position: absolute;
  }
}
</style>
