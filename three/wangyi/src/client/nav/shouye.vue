<template>
	<div id="shouye">
		<div class="nav_list" v-for="(item,index) in $router.options.routes"  v-if="!item.hidden">
			<div v-for="child in item.children">
				<div v-for="grandson in child.children">
					<router-link :to="{path:item.path +'/'+ child.path +'/'+ grandson.path}">{{grandson.tabs}}</router-link>
				</div>
			</div>
		</div>
		<div class="child_spa">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss" scope>
   #shouye{
   	  width: 100%;
   	  height: 100%;
   	  background:yellow;
   	  overflow: hidden;
   	  .nav_list{
   	  	 width: 20%;
   	  	 height: 500px;
   	  	 background-color:lime;
   	  	 float: left;
   	  }
   	  .child_spa{
   	  	width: 80%;
   	  	height: 500px;
   	  	background-color:red;
   	  	float: left;
   	  }
   }
</style>