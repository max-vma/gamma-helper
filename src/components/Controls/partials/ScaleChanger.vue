<template>
	<div class="scale-changer">
		<el-form-item label="Выбери тонику">
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
		</el-form-item>
		<el-form-item label="Выберите Тип">
			<el-select
				:model-value="neckStore.scaleType"
				placeholder="Выбери тип"
				label="Строй"
				value-key="label"
				size="large"
				style="width: 240px"
				@change="neckStore.setScaleType"
			>
				<el-option
					v-for="[key, item] in getEnumEntriesKeys(ScaleTypes)"
					:label="key"
					:value="item"
				/>
			</el-select>
		</el-form-item>
	</div>
</template>

<script setup lang="ts">
import { Plus, Minus } from '@element-plus/icons-vue'
import Notes, { MAX_NOTES_COUNT } from '@/consts/notes'
import { useNeckStore } from '@/stores/neck'
import { getEnumEntriesKeys } from '@/utils/getEnumEntriesKeys'
import { ScaleTypes } from '@/consts/scales'

const neckStore = useNeckStore()
</script>

<style lang="less">
.scale-changer {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
}
</style>
