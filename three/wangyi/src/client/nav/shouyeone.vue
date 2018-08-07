<template>
	<div id="shouyeone">
		首页的路由
		{{num}}
		{{sendList.ming}}
		<button @click="changName">点击</button>
	</div>
</template>

<script>
	import { mapState,mapMutations } from 'vuex';
	export default{
		name:'shouyeone',
		components:{},
		data(){
			return{
				
			}
		},
		methods:{
			...mapMutations([
				'changName'
			])
		},
		computed:{
			...mapState([
				'num',
				'sendList'
			])
		},
		mounted(){
			
		}
	}
</script>

<style>
</style>