<template>
  <div class="neck__string" >
    <neck-fret :is-active="isActiveNote(note)" v-for="(note, id) in fretsNotes" :key="id">
        {{ note.noteName }}
    </neck-fret>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';

import NeckFret from './fret.vue';
import Note from '@/libs/Note';
import { useStore } from 'vuex';
import { IState } from '@/store';

export default defineComponent({
    name: 'NeckString',
    props: {
        tuningNote: {
            type: Object as PropType<Note>,
            required: true,
        },
    },
    components: {
      NeckFret
    },
    setup(props){
        const store = useStore<IState>();
        const { activeScale, fretsCount } = store.state;
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


        const isActiveNote = (note: Note): boolean => activeScale.has(note);


        return { fretsNotes, isActiveNote }
    },
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