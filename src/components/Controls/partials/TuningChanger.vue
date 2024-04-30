<template>
	<div class="tuning-changer">
		<el-form-item label="Выберите строй инструмента">
			<el-select
				:model-value="neckStore.tuning"
				placeholder="Выбери строй инструмента"
				label="Строй"
				value-key="label"
				size="large"
				style="width: 240px"
				@change="neckStore.setTuning"
			>
				<el-option v-for="item in TUNINGS" :label="item.label" :value="item" />
			</el-select>
		</el-form-item>
	</div>
</template>

<script setup lang="ts">
import { TUNINGS } from '@/consts/tunings'
import { useNeckStore } from '@/stores/neck'

const neckStore = useNeckStore()
</script>

<style lang="less">
.tuning-changer {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
}
</style>
