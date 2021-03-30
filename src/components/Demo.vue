<template>
	<div class="test">
		<span>{{ count }}</span>
		<el-button type="primary" @click="changeHandler">增加</el-button>
		<span class="el-icon-ice-cream-square"></span>
	</div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
export default defineComponent({
	name: 'Demo',
	props: {
		initNum: {
			type: Number,
			default: 0
		}
	},
	setup(props, context) {
		console.log(props, context);
		let count: Ref<number> = ref(props.initNum);

		function changeHandler() {
			count.value += 1;
		}
		return { count, changeHandler };
	}
});
</script>

<style lang="scss" scoped></style>
