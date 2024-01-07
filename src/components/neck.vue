<template>
  <div class="neck">
    <neck-string  :tuning-note="note" v-for="(note, index) in tuning" :key="index"/>
  </div>
</template>

<script lang="ts">
import { MusicalScale } from "@/libs/MusicalScale";
import Notes from "@/consts/notes";
import { ScaleNames } from "@/consts/scales";
import { GUITAR_STANDART_E } from "@/consts/tunings";
import { defineComponent, ref } from "vue";
import NeckString from './string.vue';

export default defineComponent({
    name: 'Neck',
    components: {
      NeckString
    },
    setup() {
        const tuning = ref(GUITAR_STANDART_E);
        const scale = ref(new MusicalScale(Notes.A, ScaleNames.NaturalMinor))
        

        return { tuning, scale }
    },
})
</script>

<style lang="less">
.neck{
  width: 100%;
  height: 400px;
}
</style>