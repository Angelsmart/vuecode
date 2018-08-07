<template>
  <div class="home">
     <heade></heade>
     <div class="container">
			 <router-view></router-view>
	  </div> 
  </div>
  
   
</template>
  
<script>
	  	import heade from './components/heade';
			export default{
			components:{
				'heade':heade,
			}
		}
</script>

<style lang="scss" scope>

</style>
