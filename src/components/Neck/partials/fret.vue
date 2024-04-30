<template>
	<div class="neck__fret" @mouseout="onHover" @mouseover="onHover">
		<div
			:class="{
				neck__circle: true,
				'neck__circle--active': props.isActive,
				'neck__circle--tonic': props.isTonica,
			}"
		>
			<template v-if="isFirst">
				<div v-show="isHovered" class="neck__fret-tune neck__fret-tune--up">
					<ArrowRight width="16px" />
				</div>
				<div v-show="isHovered" class="neck__fret-tune neck__fret-tune--down">
					<ArrowLeft width="16px" />
				</div>
			</template>

			<slot></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useHover } from '@/hooks/useHover'
import { ArrowRight, ArrowLeft } from '@element-plus/icons-vue'
import { defineComponent, ref, toRefs } from 'vue'

interface PropType {
	isActive: boolean
	isTonica: boolean
	isFirst: boolean
}

const props = withDefaults(defineProps<PropType>(), {
	isActive: false,
	isTonica: false,
	isFirst: false,
})

const { onHover, isHovered } = useHover()
</script>

<style lang="less">
.neck {
	&__circle {
		color: #fff;
		font-weight: bold;
		font-size: 16;
		font-family: Arial, sans-serif;
		z-index: 2;
		display: flex;
		justify-content: center;
		align-items: center;
		user-select: none;
		background-color: #bbbbbb;
		position: absolute;
		width: 35px;
		height: 35px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 50%;
		&--active {
			background-color: #616161;
		}
		&--tonic {
			background-color: #ff6c5c;
		}
	}
	&__fret-controls {
		position: absolute;
		left: 0;
		top: 0;
	}
	&__fret-tune {
		position: absolute;
		width: 20px;
		height: 20px;
		left: 0;
		right: 0;
		border-radius: 50%;
		background-color: #757575;
		z-index: 10;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		&--down {
			left: calc(-16px);
		}
		&--up {
			left: calc(100% - 4px);
		}
	}
	&__fret {
		flex: 4;
		position: relative;
		&:last-child {
			flex: 2;
		}
		&:first-child {
			flex: 2;
		}
		&::after {
			content: '';
			position: absolute;
			right: 0;
			height: 100%;
			width: 5px;
			background-color: #7b7b7b;
			border-radius: 2px;
		}
		&::before {
			content: '';
			position: absolute;
			top: 50%;
			transform: translate(0, -50%);
			left: 0;
			z-index: 1;
			height: 3px;
			width: 100%;
			background-color: #cbcbcb;
		}
	}
}
</style>
