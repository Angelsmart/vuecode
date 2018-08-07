<template>
	<div>
		<!--{{msg}}-->
		<button @click="ming()" >点击切换</button>
	</div>
</template>

<script>
	export default {
	name:'BB',
	data(){
		return{
			aa:"KKK"
		}
	},
//	props:['msg'],
	mounted(){
	 console.log(this._props)
	},
	methods:{
		ming(){
			this.$emit("sun",this.aa)
		}
	}
	}
</script>

<style>
</style>