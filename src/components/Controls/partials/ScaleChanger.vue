<template>
	<div class="scale-changer">
		<el-select
			:model-value="neckStore.tonic"
			placeholder="Выбери тонику"
			value-key="label"
			size="large"
			style="width: 240px"
			@change="neckStore.setTonic"
		>
			<el-option
				v-for="[key, item] in getEnumEntriesKeys(Notes)"
				:label="key"
				:value="item"
			/>
		</el-select>
		<div class="scale-changer__buttons">
			<el-button
				type="primary"
				:icon="Minus"
				@click="() => onChangeTonic(false)"
			/>
			<el-button
				type="primary"
				:icon="Plus"
				@click="() => onChangeTonic(true)"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Plus, Minus } from '@element-plus/icons-vue'
import Notes, { MAX_NOTES_COUNT } from '@/consts/notes'
import { useNeckStore } from '@/stores/neck'
import { getEnumEntriesKeys } from '@/utils/getEnumEntriesKeys'

const neckStore = useNeckStore()

const onChangeTonic = (isPlus: boolean) => {
	if (isPlus && neckStore.tonic + 1 < MAX_NOTES_COUNT)
		neckStore.setTonic(neckStore.tonic + 1)
	if (!isPlus && neckStore.tonic - 1 >= 0)
		neckStore.setTonic(neckStore.tonic - 1)
}
</script>

<style lang="less">
.scale-changer {
	display: flex;
	align-items: center;
	gap: 8px;
	&__buttons {
		display: flex;
		gap: 2px;
	}
}
</style>
