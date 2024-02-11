<template>
  <div class="neck__string" >
    <neck-fret :is-active="isActiveNote(note)" v-for="(note, id) in fretsNotes" :key="id">
        {{ note.noteName }}
    </neck-fret>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
import NeckFret from './fret.vue';
import Note from '@/libs/Note';
import { useStore } from 'vuex';
import { IState } from '@/store';
import TuningNote from '@/libs/TuningNote';

const props = defineProps<{
    tuningNote: TuningNote
}>();

const { scale, fretsCount } = useStore<IState>().state;

const fretsNotes = computed(():Note[] => {
    const notes: Note[] = [];
    for (let index = 0; index < fretsCount + 1; index++) {
        if(notes.length === 0) notes.push(props.tuningNote);
        else {
            notes.push(notes[index - 1].getNextSemitoneNote());
        }
    }
    return notes
})


const isActiveNote = (note: Note): boolean => scale.has(note);

</script>

<!-- <script lang="ts">


export default defineComponent({
    name: 'NeckString',
    props: {
        tuningNote: {
            type: TuningNote,
            required: true,
        },
    },
    components: {
      NeckFret
    },
    setup(props){
        
    },
})
</script> -->

<style lang="less">
.neck__string {
    display: flex;
    width: 100%;
    height: 40px;
    background-color: #fff;
}
</style>