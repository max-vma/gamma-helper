<template>
	<div class="gamma-helper-page">
		<div class="gamma-helper-page__inner">
			<controls />
			<neck />
		</div>
	</div>
</template>

<script setup lang="ts">
import Neck from '@/components/Neck/index.vue'
import Controls from '@/components/Controls/index.vue'
</script>

<style lang="less" scoped>
.gamma-helper-page {
	padding: 16px;
	height: 100%;
	display: flex;
	justify-content: center;
	&__inner {
		min-width: 80%;
	}
}
</style>
