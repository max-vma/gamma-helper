<template>
	<div class="controls">
		<div class="controls__tuning">
			<tuning-changer
				:tunings="TUNINGS"
				:tuning="(neckStore.tuning as Tuning)"
				@change="neckStore.setTuning"
			/>
		</div>
		<div class="controls__scale">
			<scale-changer />
		</div>
	</div>
</template>

<script setup lang="ts">
import TuningChanger from './partials/TuningChanger.vue'
import ScaleChanger from './partials/ScaleChanger.vue'
import { TUNINGS } from '@/consts/tunings'
import { Tuning } from '@/libs/Tuning'
import { useNeckStore } from '@/stores/neck'
import { MusicalScale } from '@/libs'

const neckStore = useNeckStore()
</script>

<style lang="less">
.controls {
	padding: 12px;
	display: flex;
	gap: 12px;
}
</style>
