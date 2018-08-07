<template>
	<div class="xiaomihome">
		<header>
			<div>
				<ul class="header_left">
			            <li v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
			              <router-link :to="{path:item.path}">
			              {{ item.alias }}
			              </router-link>
			              <span class="sep">{{item.asa}}</span>
			            </li>
			    </ul>
			    <div class="header_right">
			    	购物车( 0 )
			    	<div class="header_right_hover">
			    	</div>
			    </div>
			    <ul class="header_center">
			    	<li><a href="">登录</a></li>
			    	<span>|</span>
			    	<li><a href="">注册</a></li>
			    	<span>|</span>
			    	<li><a href="">消息通知</a></li>
			    </ul>
			</div>
		</header>
	    <nav>
	    	<div class="nav_auto">
	    		<div class="nav_log">
			    	<img src="./assets/logo.png" alt="" />
	    		</div>
	    	    <div class="nav_center">
	    	    	<ul>
	    	    		<li></li>
	    	    		<li class="nav_centerone">小米手机</li>
	    	    		<li class="nav_centerone">红米</li>
	    	    		<li class="nav_centerone">笔记本</li>
	    	    		<li class="nav_centerone">电视</li>
	    	    		<li class="nav_centerone">盒子</li>
	    	    		<li>新品</li>
	    	    		<li class="nav_centerone">路由器</li>
	    	    		<li class="nav_centerone">智能硬件</li>
	    	    		<li>服务</li>
	    	    		<li>社区</li>
	    	    	</ul>
	    	    </div>
                <div class="nav_right">
                	<div class="inpl">
                		<input type="text" />
                		<div class="inpl_hove">
                			<ul>
                				<li><a href="">小米手机6</a><span>约有24件</span></li>
                				<li><a href="">红米note 4X</a><span>约有24件</span></li>
                				<li><a href="">手环</a><span>约有24件</span></li>
                				<li><a href="">耳机</a><span>约有24件</span></li>
                				<li><a href="">充电宝</a><span>约有24件</span></li>
                				<li><a href="">运动鞋</a><span>约有24件</span></li>
                				<li><a href="">路由器</a><span>约有24件</span></li>
                				<li><a href="">小米盒子</a><span>约有24件</span></li>
                				<li><a href="">电视</a><span>约有24件</span></li>
                			</ul>
                		</div>
                	</div>
                	<div class="inpr">
                		<i></i>
                	</div>
                </div>    	
	    	    <div class="nav_center_hover">
	    	    	<div class="nav_center_hover_center">
	    	    		<div class="nav_center_hover_centerone"></div>
	    	    		<div class="nav_center_hover_centerone">1</div>
	    	    		<div class="nav_center_hover_centerone">2</div>
	    	    		<div class="nav_center_hover_centerone">3</div>
	    	    		<div class="nav_center_hover_centerone">4</div>
	    	    		<div class="nav_center_hover_centerone">5</div>
	    	    		<div class="nav_center_hover_centerone">3333</div>
	    	    		<div class="nav_center_hover_centerone">6</div>
	    	    		<div class="nav_center_hover_centerone">7</div>
	    	    	</div>	
	    	    </div>
	    	</div>
	    </nav>
	    <div class="Carousel">
	    	<carousel></carousel>
	    </div>
	    <div class="Introduce">
	    	<introduce></introduce>
	    </div>
	    <service></service>
	    <footers></footers>
	</div>
</template>

<script>
	import carousel from '@/client/carousel';
	import introduce from '@/client/introduce';
	import service from '@/client/service';
	import footers from '@/client/footers';
	export default{
		components:{
			'carousel':carousel,
			'introduce':introduce,
			'service':service,
			'footers':footers
		},
		data(){
			return{
				
			}
		},
		methods:{
			
		}
	}
	$(document).ready(function(){
//		.nav_center_hover 选项卡
       	  $('.nav_center_hover_centerone:not(:eq(1))').hide()
       	  $('.nav_centerone').mouseover(function(){
       	  	  var idx =$(this).index()
       	  	  $('.nav_center_hover_centerone').eq(idx).show().siblings().hide();
       	  })    
       	   $('.nav_centerone,.nav_center_hover').mouseover(function(){
       	  	   $(".nav_center_hover").css({'height':'201px'});
       	  	   $(".nav_center_hover_center").css({'height':'201px'});
       	  }) 
       	  $('.nav_centerone,.nav_center_hover').mouseout(function(){
       	  	 $(".nav_center_hover").css({'height':'0px'});
       	  	  $(".nav_center_hover_center").css({'height':'0px'});
       	  })
       	    
       	 
//input获取焦点的时候出现
       	  $('.inpl input').focus(function(){
       	  	 $(".inpl_hove").css({'display':'block'})
       	  	 $(".inpl").css({'border':'1px solid orange'})
       	  	 $(".inpr").css({'border':'1px solid orange'})
       	  })
       	   $('.inpl input').blur(function(){
       	  	 $(".inpl_hove").css({'display':'none'})
       	  	 $(".inpl").css({'border':'1px solid #e0e0e0'})
       	  	 $(".inpr").css({'border':'1px solid #e0e0e0'})
       	  })  
       	  
       }) 

</script>

<style lang="scss" scoped>
   @import '../static/scss/homepage.scss';
</style>