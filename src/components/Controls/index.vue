<template>
	<div class="controls">
		<div class="controls__tuning">
			<tuning-changer
				:tunings="TUNINGS"
				:tuning="(neckStore.tuning as Tuning)"
				@change="neckStore.setTuning"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import TuningChanger from './partials/TuningChanger.vue'
import { TUNINGS } from '@/consts/tunings'
import { Tuning } from '@/libs/Tuning'
import { useNeckStore } from '@/stores/neck'

const neckStore = useNeckStore()
</script>

<style lang="less">
.neck {
	width: 100%;
	height: 400px;
}
</style>
