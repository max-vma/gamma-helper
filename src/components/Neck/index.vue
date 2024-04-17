<template>
	<div class="neck">
		<neck-string
			v-for="(note, index) in tuningNotes"
			:tuning-note="(note as Note)"
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
	return neckStore.tuning.notes
})
</script>

<style lang="less">
.neck {
	width: 100%;
	height: 400px;
}
</style>
