<template>
  <div class="neck__string" >
    <neck-fret :note="note" :fret-index="id" v-for="(note, id) in frets" :key="id"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import NeckFret from './fret.vue';
import Note from '@/libs/Note';
import Notes from '@/consts/notes';

export default defineComponent({
    name: 'NeckString',
    props: {
        tuningNote: {
            type: Object as PropType<Note>,
            required: true,
        },
        fretsCount:{
            type: Number,
            required: true,
            default: 12
        }
    },
    components: {
      NeckFret
    },
    computed: {
        frets(): Note[]{
            const notes: Note[] = [];
            for (let index = 0; index < this.fretsCount + 1; index++) {
                if(notes.length === 0) notes.push(this.tuningNote);
                else {
                    notes.push(notes[index - 1].getNextSemitoneNote());
                }
            }
            return notes
        }
    }
})
</script>

<style lang="less">
.neck__string {
    display: flex;
    width: 100%;
    height: 40px;
    background-color: #fff;
}
</style>