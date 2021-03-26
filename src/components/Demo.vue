<template>
	<div class="test">
		<span>{{ count }}</span>
		<el-button type="primary" @click="changeHandler">增加</el-button>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
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
		let count = ref(props.initNum);

		function changeHandler() {
			count.value += 1;
		}
		return { count, changeHandler };
	}
});
</script>

<style lang="scss" scoped></style>
