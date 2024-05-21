<template>
	<div>
		这是父应用的brand页面 <button @click="openChildren">开启子应用</button>
		<table border="2">
			<tr>
				<th>品牌</th>
				<th>价格</th>
				<th>单价</th>
				<th>盈利</th>
			</tr>
			<tr v-for="(item, index) in dataCopilt" :key="index">
				<td>{{ item.type }}</td>
				<td>
					<p>{{ item.yuanjia }}</p>
					<hr>
					<p class="red">{{ item.shoujia }}</p>
				</td>
				<td>
					<p>{{ (item.yuanjia / item.time).toFixed(2) }}</p>
					<hr>
					<p class="red">{{ (item.shoujia / item.time).toFixed(2) }}</p>
				</td>
				<td>
					<p>{{ item.shoujia - item.yuanjia }}</p>
					<hr>
					<p class="red">{{ (((item.shoujia - item.yuanjia) / item.yuanjia)*100).toFixed(2) }}%</p>
				</td>
			</tr>
		</table>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const backPath = ref<any>('')
setTimeout(() => {
	backPath.value = route.path
}, 100)

const openChildren = () => {
	router.push({
	  path: '/app1/home'
	})
}

// 首发价
// const dataCopilt = [
// 	{
// 		type: '月卡',
// 		yuanjia: 8,
// 		shoujia: 12,
// 		time: 1
// 	},
// 	{
// 		type: '季卡',
// 		yuanjia: 17,
// 		shoujia: 30,
// 		time: 3
// 	},
// 	{
// 		type: '半年卡',
// 		yuanjia: 31,
// 		shoujia: 50,
// 		time: 6
// 	},
// 	{
// 		type: '年卡',
// 		yuanjia: 48,
// 		shoujia: 72,
// 		time: 12
// 	},
// ]

// 第一次改价
const dataCopilt = [
	{
		type: '月卡',
		yuanjia: 9,
		shoujia: 14,
		time: 1
	},
	{
		type: '季卡',
		yuanjia: 18,
		shoujia: 32,
		time: 3
	},
	{
		type: '半年卡',
		yuanjia: 32,
		shoujia: 53,
		time: 6
	},
	{
		type: '年卡',
		yuanjia: 49,
		shoujia: 78,
		time: 12
	},
]
</script>

<style scoped>
table {
	border-collapse: collapse;
	border-spacing: 0;
	margin-top: 20px;
}
table p {
	line-height: 15px;
	margin: 0;
}
table td {
	padding: 8px 0;
	text-align: center;
}
table th {
	width: 100px;
}
.red {
	color: red;
}
</style>
