<template>
	<div class="introduce">
		<ul></ul>
		<ol>
		  <!-- <li v-for="aa in $router.options.routes" v-if="aa.hidden">
			   	<router-link :to="{path:aa.path}">-->
			   	<li v-for="itm in sss">
			   		<img :src="itm.name" alt="" />	
			   	</li>	
			   		
			   		
			<!--   	</router-link> 
		   </li>	 -->
		</ol>
	</div>
</template>

<script>
	import img1 from '../assets/xmad_1514990352991_mlzkS.jpg'
	import img2 from '../assets/xmad_15150748721719_UpeAC.jpg'
	import img3 from '../assets/xmad_15150753566383_yLfQU.jpg'
	
	 export default{
	 	data(){
	 		return{
	 			sss:[
		 			{
		 				'name':img1
		 			},
		 			{
		 				'name':img2
		 			},
		 			{
		 				'name':img3
		 			}
	 			]
	 		}
	 	}
	 }
	 console.log(img1)
</script>

<style lang="scss" scope>
    .introduce{
    	ul{
    		width: 234px;
    		height: 170px;
    		background: #5F5750;
    		float: left;
    	}
    	ol{
    		width: 990px;
    		height: 170px;
    		float: left;
    		li{
    			width: 316px;
    			height: 170px;
    			background:pink;
    			float: right;
    			margin-left:14px;
    			img{
    				width: 100%;
    				height: 100%;
    			}
    		}
    	}
    }
</style>