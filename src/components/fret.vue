<template>
    <div class="neck__fret">
        <div :class="{
          'neck__circle': true,
          'neck__circle--active': true
          }">
            {{ note.noteName }}
        </div>
      </div>
</template>

<script lang="ts">
import Note from "@/libs/Note"
import { defineComponent, PropType } from "vue"

export default defineComponent({
    name: 'NeckFret',
    props:{
        note: {
            type: Object as PropType<Note>,
            required: true
        },
        fretIndex: {
            type: Number,
            required: true
        }
    }
})
</script>

<style lang="less">
.neck{
    &__circle{
        color: #fff;
        font-weight: bold;
        font-size: 16;
        font-family: Arial, sans-serif;
        position: relative;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        user-select: none;
        &--active{
        position: absolute;
        width: 30px;
        height: 30px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background-color: #95a5a6;
        }
        &--red{
        background-color:#e74c3c;
        } 
    }
    &__fret{
        flex: 4;
        // border: 1px solid red;
        position: relative;
        // border-right: 4px solid #bdc3c7;
        &:last-child{
            flex: 1;
        }
        &:first-child{
            flex: 1;
        }
        &::after{
        content: '';
        position: absolute;
        right: 0;
        height: 100%;
        width: 5px;
        background-color: #bdc3c7;
        border-radius: 2px;

        }
        &::before{
        content: '';
        position: absolute;
        top: 50%;
        transform: translate(0,-50%);
        left: 0;
        z-index: 1;
        height: 4px;
        width: 100%;
        background-color: #e67e22;
        }
    }
}
</style>