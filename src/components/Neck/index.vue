<template>
	<div class="neck">
		<neck-string
			v-for="(note, index) in tuningNotes"
			:tuning-note="note"
			:key="index"
		/>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import NeckString from './partials/string.vue'
import { useNeckStore } from '@/stores/neck'
import { Note } from '@/libs'
const neckStore = useNeckStore()

const tuningNotes = computed(() => {
	return neckStore.tuning.notes as Note[]
})
</script>

<style lang="less">
.neck {
	position: relative;
	width: 100%;
	padding-top: 40px;
	&__tune-changer {
		position: absolute;
	}
}
</style>
