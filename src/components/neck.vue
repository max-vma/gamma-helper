<template>
	<div class="neck">
		<neck-string
			:tuning-note="(note as TuningNote)"
			v-for="(note, index) in tuning"
			:key="index"
		/>
	</div>
</template>

<script setup lang="ts">
import { GUITAR_STANDART_E } from '@/consts/tunings'
import { ref } from 'vue'
import NeckString from './string.vue'
import { TuningNote } from '@/libs/TuningNote'

const tuning = ref(GUITAR_STANDART_E)
</script>

<style lang="less">
.neck {
	width: 100%;
	height: 400px;
}
</style>
