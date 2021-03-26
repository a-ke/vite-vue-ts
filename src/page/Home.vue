<template>
	<el-date-picker
		v-model="value1"
		type="datetimerange"
		range-separator="至"
		start-placeholder="开始日期"
		end-placeholder="结束日期"
	>
	</el-date-picker>
	<demo :init-num="1"></demo>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Demo from '../components/Demo.vue';
export default defineComponent({
	name: 'Home',
	components: { Demo },
	data() {
		return {
			value1: ''
		};
	}
});
</script>

<style></style>
