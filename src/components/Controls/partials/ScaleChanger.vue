<template>
  <div :class="$style.scaleChanger">
    <ElFormItem label="Выбери тонику">
      <ElSelect
        :model-value="scaleStore.tonic"
        placeholder="Выбери тонику"
        value-key="label"
        size="large"
        style="width: 240px"
        @change="scaleStore.setTonic">
        <ElOption
          v-for="[key, item] in getEnumEntriesKeys(Notes)"
          :label="key"
          :value="item" />
      </ElSelect>
    </ElFormItem>

    <ElFormItem label="Выберите Тип">
      <ElSelect
        :model-value="scaleStore.type"
        placeholder="Выбери тип"
        label="Строй"
        value-key="label"
        size="large"
        style="width: 240px"
        @change="scaleStore.setType">
        <ElOption
          v-for="[key, item] in getEnumEntriesKeys(ScaleTypes)"
          :label="key"
          :value="item" />
      </ElSelect>
    </ElFormItem>
  </div>
</template>

<script setup lang="ts">
import Notes from '@/consts/notes';
import { getEnumEntriesKeys } from '@/shared';
import { ScaleTypes } from '@/consts/scales';
import { useScaleStore } from '@/stores/scale';

const scaleStore = useScaleStore();
</script>

<style lang="less" module>
.scaleChanger {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
</style>
