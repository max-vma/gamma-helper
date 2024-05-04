<template>
  <div class="scale-changer">
    <el-form-item label="Выбери тонику">
      <el-select
        :model-value="scaleStore.tonic"
        placeholder="Выбери тонику"
        value-key="label"
        size="large"
        style="width: 240px"
        @change="scaleStore.setTonic">
        <el-option
          v-for="[key, item] in getEnumEntriesKeys(Notes)"
          :label="key"
          :value="item" />
      </el-select>
    </el-form-item>
    <el-form-item label="Выберите Тип">
      <el-select
        :model-value="scaleStore.type"
        placeholder="Выбери тип"
        label="Строй"
        value-key="label"
        size="large"
        style="width: 240px"
        @change="scaleStore.setType">
        <el-option
          v-for="[key, item] in getEnumEntriesKeys(ScaleTypes)"
          :label="key"
          :value="item" />
      </el-select>
    </el-form-item>
  </div>
</template>

<script setup lang="ts">
import Notes from '@/consts/notes'
import { getEnumEntriesKeys } from '@/utils/getEnumEntriesKeys'
import { ScaleTypes } from '@/consts/scales'
import { useScaleStore } from '@/stores/scale'

const scaleStore = useScaleStore()
</script>

<style lang="less">
.scale-changer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
</style>
