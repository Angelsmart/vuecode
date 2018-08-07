<template>
	<div id="admin">
		<heade></heade>
		<div class="container">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
		import heade from './components/header';
		export default{
		components:{
			'heade':heade,
		},
		data(){
			return{
				
			}
		},
		methods:{
			tonotFined:function(){
				this.$router.push({
					path:"/notFined"
				})	
			}
		}
	}
	
</script>

<style lang="scss" scope>
	#admin{
	  width: 100%;
	  height: 100%;
	  background: #d2691e;
	}
    nav{
    	width: 201px;
    	height: 262px;
    	background:#ffffff;
    }
</style>
