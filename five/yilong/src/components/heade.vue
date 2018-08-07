<template>
	<div class="header">
	  <div class="heade">
	  	<div class="heade_top">
	  		<div class="logo">
	  			<a href=""></a>
	  		</div>
	  		<div class="logo_r">
	  			<div class="l_r_l">
	  				<span>
	  					<a href="">里程商城</a>
	  				</span>
	  				<b></b>
	  				<span>
	  					<a href="">在线客服</a>
	  				</span>
	  				<b></b>
	  				<span>
	  					<a href="">English</a>
	  					<i></i>
	  				</span>
	  			</div>
	  			<a class="program" href="">
	  				<i class="pr_logo"></i>
	  				<em>小程序</em>
	  				<em>体验更轻盈</em>
	  				<div class="pr_box">
	  					 <i class="jiao"></i>
	  				</div>
	  			</a>
	  			<a class=" phone" href="">
	  				<i class="ph_logo"></i>
	  				<em>手机版</em>
	  				<em>专享五折起</em>
	  				<div class="ph_box">
	  				</div>
	  			</a>
	  			<span class="service">
	  				<i class="s_logo"></i>
	  				<em>7×24 客服电话</em>
	  				<b class="newphone">
	  					<i class="n_logo"></i>
	  					4009-333-333
	  				</b>
	  				<div class="se_phone">
	  					<i></i>
	  					<ul>
	  						<li>
	  							<p>国内：4009-333-333</p>
	  						</li>
	  						<li>
	  							<p>香港：852-8131-8883</p>
	  							<p class="se_li_p">852-8131-8983</p>
	  						</li>
	  						<li class="se_li">
	  							<p>海外：86-10-6432-9999</p>
	  						</li>
	  					</ul>
	  				</div>
	  			</span>
	  		</div>
	  	</div>
	  	<div class="heade-bottom">
	  		<div class="heade_nav">
	  		   <ul class="header_nav_left">
	  		   	  <li v-for="(item,index) in $router.options.routes">
	  		   	  	<span class="child_route" v-for="child in item.children" v-if="!child.hidden">
							<router-link :to="{path:item.path+'/'+child.path}">
								{{ child.tabs }}
							</router-link>
					</span>
	  		   	  </li>
	  		   </ul>
	  		   <div class="header_nav_right">
	  		   	    <div class="header_nav_right_t">
	  		   	    	<router-link to="/Sign">登录</router-link>
	  		   	    	|
	  		   	    	<router-link to="/Register">注册</router-link>
	  		   	    </div>
	  		   	    <div class="header_nav_right_b">
	  		   	    	 <div class="header_nav_right_b_deng">
	  		   	    	 	 <router-link to="/Sign">登录</router-link>
	  		   	    	 </div>
	  		   	    	 <ul class="header_nav_right_b_ul">
	  		   	    	 	<li v-for="(car,index) in num">
	  		   	    	 		<p :class="'cars'+index"></p>
	  		   	    	 		<span>{{car}}</span>
	  		   	    	 	</li>
	  		   	    	 </ul>
	  		   	    </div>
	  		   </div>
	  		</div>
	  	</div>
	  </div>
	</div>
</template>
  
<script>
export default {
name:'heade',
components:{},
data(){
	return{
		num:['酒店订单','机票订单','火车票订单','现金账户','汽车票订单','酒店收藏','我的点评','个人设置']
	}
},
mounted(){
	let navhover = document.querySelector('.header_nav_right');
	let navhoverul = document.querySelector('.header_nav_right_b');
	navhover.onmouseover=function(){
		navhoverul.style.display = "block"
	}
	navhover.onmouseout=function(){
		navhoverul.style.display = "none"
	}
 }
}
    
</script>

<style lang="scss" scope>
     @import '../../static/scss/heade';
</style>
