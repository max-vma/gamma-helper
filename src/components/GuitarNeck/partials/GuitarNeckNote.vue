<template>
  <div
    v-if="!isHidden"
    :class="[$style.note, isTonica && $style.isTonica]">
    {{ props.note.noteName }}{{ props.note.octave }}
    <template v-if="isChanged">
      <!-- <div
          v-show="isHovered"
          class="neck__fret-tune neck__fret-tune--up"
          @click="() => onChangeTuningNote(true)">
          <ArrowRight width="16px" />
        </div>
        <div
          v-show="isHovered"
          class="neck__fret-tune neck__fret-tune--down"
          @click="() => onChangeTuningNote(false)">
          <ArrowLeft width="16px" />
        </div> -->
    </template>
  </div>
</template>

<script setup lang="ts">
import { Note } from '@/libs'

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

  &:hover {
    // scale: 1.25 1.25;
    transform: translate(-50%, -50%) scale(1.15, 1.15);
    transition: 0.2s;
  }
}
.isTonica {
  background-color: #ff6c5c;
}

// .neck {
//   &__fret-controls {
//     position: absolute;
//     left: 0;
//     top: 0;
//   }
//   &__fret-tune {
//     position: absolute;
//     width: 20px;
//     height: 20px;
//     left: 0;
//     right: 0;
//     border-radius: 50%;
//     background-color: #757575;
//     z-index: 10;
//     cursor: pointer;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     &--down {
//       left: calc(-16px);
//     }
//     &--up {
//       left: calc(100% - 4px);
//     }
//   }
// }
</style>
