<template>
	<div class="tuning-changer">
		<el-select
			:model-value="tuning"
			placeholder="Выбери строй"
			value-key="label"
			size="large"
			style="width: 240px"
			@change="onChange"
		>
			<el-option
				v-for="item in props.tunings"
				:label="item.label"
				:value="item"
			/>
		</el-select>
	</div>
</template>

<script setup lang="ts">
import { TTunings } from '@/consts/tunings'
import { Tuning } from '@/libs/Tuning'

const emit = defineEmits<{ (e: 'change', tuning: Tuning): void }>()

interface PropTypes {
	tunings: TTunings
	tuning: Tuning
}
const props = defineProps<PropTypes>()

const onChange = (t: Tuning) => {
	emit('change', t)
}
</script>
