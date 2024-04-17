<template>
	<div class="neck__fret">
		<div
			:class="{
				neck__circle: true,
				'neck__circle--active': props.isActive,
			}"
		>
			<slot></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineComponent, PropType, toRefs } from 'vue'
const props = defineProps<{
	isActive: boolean
}>()
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
			background-color: #ff6c5c;
		}
		&--red {
			background-color: #ff6c5c;
		}
	}
	&__fret {
		flex: 4;
		// border: 1px solid red;
		position: relative;
		// border-right: 4px solid #bdc3c7;
		&:last-child {
			flex: 1;
		}
		&:first-child {
			flex: 1;
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
