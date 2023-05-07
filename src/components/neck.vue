<template>
  <div class="neck">
    <neck-string :frets-count="frets" :tuning-note="note" v-for="(note, index) in tuning" :key="index"/>
  </div>
</template>

<script lang="ts">
import { GUITAR_STANDART_E } from "@/consts/tunings";
import { defineComponent } from "vue"
import NeckString from './string.vue';

export default defineComponent({
    name: 'Neck',
    components: {
      NeckString
    },
    data: () => ({
        frets: 12,
        tuning: GUITAR_STANDART_E,
    }),
    methods: {
    }
})
</script>

<style lang="less">
.neck{
  width: 100%;
  height: 400px;
}
</style>