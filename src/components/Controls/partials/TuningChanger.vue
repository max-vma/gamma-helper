<template>
  <div :class="$style.tuningChanger">
    <el-form-item label="Строй">
      <el-select
        :model-value="tuningStore.tuning"
        placeholder="Выберите строй"
        label="Строй"
        value-key="label"
        size="large"
        style="width: 240px"
        @change="tuningStore.setTuning">
        <el-option
          v-for="item in TUNINGS"
          :label="item.label"
          :value="item" />
      </el-select>
    </el-form-item>
  </div>
</template>

<script setup lang="ts">
import { TUNINGS } from '@/consts/tunings'
import { useTuningStore } from '@/stores/tuning'

const tuningStore = useTuningStore()
</script>

<style lang="less" module>
.tuningChanger {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
</style>
