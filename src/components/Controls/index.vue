<template>
	<div class="controls">
		<div class="controls__block">
			<div class="controls__block-title">Строй инструмента</div>
			<tuning-changer />
		</div>
		<div class="controls__block">
			<div class="controls__block-title">Звуковой ряд</div>
			<scale-changer />
		</div>
	</div>
</template>

<script setup lang="ts">
import TuningChanger from './partials/TuningChanger.vue'
import ScaleChanger from './partials/ScaleChanger.vue'
</script>

<style lang="less">
.controls {
	padding: 12px;
	display: flex;
	gap: 12px;
	justify-content: space-around;
	flex-wrap: wrap;
	&__block-title {
		font-size: 22px;
		font-weight: 600;
		text-align: center;
		margin-bottom: 12px;
	}
}
</style>
