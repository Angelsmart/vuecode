<template>
	<div class="shouye">
		<div class="carou">
			<div class="swiper-container">
				    <div class="swiper-wrapper">
				        <div class="swiper-slide T_bannerone"></div>
				        <div class="swiper-slide T_bannertwo"></div>
				        <div class="swiper-slide T_bannertree"></div>
				        <div class="swiper-slide T_bannerfour"></div>
				    </div>
			    <!-- 如果需要分页器 -->
			    <div class="swiper-pagination"></div>
			</div>
		    <div class="swiper_hover">
		    	<div class="swiper_hover_h"></div>
		    </div>
		</div>
		<div class="personality">
			<div class="personality_top">
			    <router-link to="/Sign">登录</router-link>展示你的个性内容
			</div>
		</div>
	    <div class="Telescopic">
	    	<theme></theme>
	    </div>
	    <div class="objective">
	    	<objective></objective>
	    </div>
	    <div class="super">
	    	<supers></supers>
	    </div>
	    <div class="Tourism">
	    	<tourism></tourism>
	    </div>
	    <introduc></introduc>
	    <footers></footers>
	    <div class="servie">
	    	<div v-for="(item,index) in $router.options.routes" v-if="item.zhu">
	    		<ul v-for="child in item.children" v-if="child.shou">
		    		<li v-for="servie in child.children" v-if="servie.hidden">
		    			<router-link :to="{path:child.path +'/'+ servie.path}">{{servie.tabs}}</router-link>
		    		</li>
	    		
	    	    </ul>
	    	</div>
	    	
	    </div>
	    <div class="servieview">
	    	<router-view />
	    </div>
	</div>
	
</template>

<script>
	import theme from '../shouye/theme';
	import objective from '../shouye/objective';
	import supers from '../shouye/supers';
	import Tourism from '../shouye/Tourism';
	import introduc from '../shouye/footer_a';
	import footers from '../shouye/footer_b'
			export default{
			components:{
				'theme':theme,
				'objective':objective,
				'supers':supers,
				'tourism':Tourism,
				'introduc':introduc,
				'footers':footers
			},
			mounted(){
				var mySwiper = new Swiper ('.swiper-container', {
				    autoplay: {
				    delay: 3000,
				    disableOnInteraction: false,
				    },
				    direction: 'horizontal',
				    loop: true,
				    effect : 'fade',
				    // 如果需要分页器
				    pagination: {
				      el: '.swiper-pagination',
				      clickable :true,
				    },    
			    }) 
			}
		}
	
		
       	  
	
		
</script>

<style lang='scss' scope>
    @import '../../../static/scss/shouye';
</style>