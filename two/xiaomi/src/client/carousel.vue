<template>
	<div class="carou">
		<div class="swiper-container">
			    <div class="swiper-wrapper">
			        <div class="swiper-slide T_bannerone">
			        	<img src="../assets/xmad_1514990888823_zjvKO.jpg" alt="" />
			        </div>
			        <div class="swiper-slide T_bannertwo">
			        	<img src="../assets/xmad_15145551497382_zWtuy.jpg" alt="" />
			        </div>
			        <div class="swiper-slide T_bannertree">
			        	<img src="../assets/xmad_1514991018787_KLpMh.jpg" alt="" />
			        </div>
			        <div class="swiper-slide T_bannerfour">
			            <img src="../assets/xmad_15144614850864_AvtDN.jpg" alt="" />
			        </div>
			        <div class="swiper-slide T_bannerfour">
			            <img src="../assets/xmad_15039951895346_BYpul.jpg" alt="" />
			        </div>
			    </div>
		    <!-- 如果需要分页器 -->
		    <div class="swiper-pagination"></div>
		    <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

		</div>
	    <div class="sidebarl">
	    	<ul>
	    		<li><span>手机 电话卡</span><i>></i></li>
	    		<li><span>笔记本</span><i>></i></li>
	    		<li><span>电视盒子</span><i>></i></li>
	    		<li><span>路由器 智能硬件</span><i>></i></li>
	    		<li><span>移动电源 电池 插线板</span><i>></i></li>
	    		<li><span>耳机 音箱</span><i>></i></li>
	    		<li><span>保护套 贴膜</span><i>></i></li>
	    		<li><span>线材 支架 存储卡</span><i>></i></li>
	    		<li><span>箱包 服饰 鞋 眼镜</span><i>></i></li>
	    		<li><span>米兔 生活周边</span><i>></i></li>
	    	</ul>
	    </div>
	    <div class="sidebarr">
	    	<div class="sidebarr_hover">1</div>
		    <div class="sidebarr_hover">2</div>
		    <div class="sidebarr_hover">3</div>
		    <div class="sidebarr_hover">4</div>
		    <div class="sidebarr_hover">5</div>
		    <div class="sidebarr_hover">6</div>
		    <div class="sidebarr_hover">7</div>
		    <div class="sidebarr_hover">8</div>
		    <div class="sidebarr_hover">9</div>
		    <div class="sidebarr_hover">10</div>
	    </div>
	    
	   
	</div>
</template>

<script>
	$(function(){
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
	    // 如果需要前进后退按钮
	    navigation: {
	      nextEl: '.swiper-button-next',
	      prevEl: '.swiper-button-prev',
	    },
	    
	  }) 
	   //轮播选项卡
	   $('.sidebarr_hover').hide()
       	  $('.sidebarl ul li').mouseover(function(){
       	  	  $(this).addClass('lihover').siblings().removeClass('lihover')
       	  	  var idx =$(this).index()
       	  	  $('.sidebarr_hover').eq(idx).show().siblings().hide();
       	  })
       	   $('.sidebarl ul li').mouseout(function(){
       	   	  $(this).removeClass('lihover')
       	  	 $('.sidebarr_hover').hide()
       	  })  
       	  
       	  $(".sidebarr_hover").mouseover(function(){
       	  	 var idx =$(this).index()
       	  	 $(".sidebarl ul li").eq(idx).addClass('lihover')
       	  	 $('.sidebarr_hover').eq(idx).show()
	       	  	 $('.sidebarr_hover').mouseout(function(){
	       	  	 	  $(".sidebarl ul li").removeClass('lihover')
	       	  	 	$('.sidebarr_hover').hide()
	       	  }) 
       	  })
       	  
	})
		
</script>

<style lang='scss' scope>
    .carou{
    	position: relative;
    }
	.swiper-container{
        width: 1226px;
        height: 460px;
        position: absolute;
    }
    .sidebarl{
    	width: 234px;
    	height: 420px;
    	padding: 20px 0px;
    	background: rgba(0,0,0,0.6);
    	position: absolute;
    	z-index: 20;
    	ul{
    		width: 100%;
    		height: 100%;
    		li{
    			width: 100%;
    			height: 42px;
    			font-size:14px;
    			color: #ffffff;
    			line-height: 42px;
    			cursor: pointer;
    			span{
    				display: inline-block;
    				float: left;
    				margin-left:20px;
    			}
    			i{
    				display: inline-block;
    				float: right;
    				margin-right:20px;
    			}
    		}
    		.lihover{
    			background:orange;
    		}
    	}
    }
    .sidebarr_hover{
    	width: 300px;
    	height: 460px;
    	position:absolute;
    	z-index:20 ;
    	left: 234px;
    	background: lime;
    	/*.sidebarr_hover{
    		width: 100%;
    		height: 100%;
    		background:lime;
    		position: absolute;
    		left: 0;
    		top: 0;
    	}*/
    }
    .swiper-button-prev{
    	width: 41px;
    	height: 69px;
    	background:url(../assets/icon-slides.png) 83px 0px ;
    }
    .swiper-button-prev:hover{
    	background:url(../assets/icon-slides.png) 0px 0px ;
    }
    .swiper-button-next{
    	width: 41px;
    	height: 69px;
    	background:url(../assets/icon-slides.png) 207px 0px ;
    }
    .swiper-button-next:hover{
    	background:url(../assets/icon-slides.png) 125px 0px ;
    }

</style>