<template>
  <div
    @mouseover="onHover"
    @mouseout="onHover"
    v-if="!isHidden || isChanged"
    :class="[$style.note, isTonica && $style.isTonica, isHidden && $style.isHidden]">
    <span :class="[$style.noteInner]"> {{ props.note.noteName }}{{ props.note.octave }} </span>

    <template v-if="isChanged">
      <div
        @click="$emit('onNext')"
        v-show="isHovered"
        :class="[$style.noteTune, $style.noteTuneUp]">
        <ArrowRight width="16px" />
      </div>
      <div
        @click="$emit('onPrev')"
        v-show="isHovered"
        :class="[$style.noteTune, $style.noteTuneDown]">
        <ArrowLeft width="16px" />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useHover } from '@/hooks/useHover'
import { Note } from '@/libs'
import { ArrowRight, ArrowLeft } from '@element-plus/icons-vue'
interface PropTypes {
  note: Note
  isTonica?: boolean
  isChanged?: boolean
  isHidden?: boolean
}
const props = withDefaults(defineProps<PropTypes>(), {
  isTonica: false,
  isChanged: false,
  isHidden: false,
})

const emit = defineEmits<{
  (e: 'onPrev'): void
  (e: 'onNext'): void
}>()
const { isHovered, onHover } = useHover()
</script>

<style lang="less" module>
.note {
  color: #fff;
  font-weight: bold;
  font-size: 16;
  font-family: Arial, sans-serif;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  // background-color: #bbbbbb;
  background-color: #616161;
  position: absolute;
  width: 35px;
  height: 35px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  transition: 0.2s;
  // opacity: 1;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200%;
    height: 100%;
  }
  &:hover {
    // scale: 1.25 1.25;
    transform: translate(-50%, -50%) scale(1.15, 1.15);
    transition: 0.2s;
  }
}
.noteTune {
  position: absolute;
  width: 20px;
  height: 20px;
  left: 0;
  right: 0;
  border-radius: 50%;
  background-color: #757575;
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  &:hover {
    transform: scale(1.1, 1.1);
    transition: 0.2s;
  }
  &:active {
    transform: scale(1.05, 1.05);
    transition: 0.2s;
  }
}
.noteTuneUp {
  left: calc(100% - 4px);
}
.noteTuneDown {
  left: calc(-16px);
}
.isTonica {
  background-color: #ff6c5c;
}

.isHidden {
  background-color: #e0e0e0;

  .noteInner {
    color: #616161;
  }
}
</style>
