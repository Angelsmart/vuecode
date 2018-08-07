<template>
	<div id="Sign">
		<div class="sign_header">
			<div class="sign_header_center">
				<div class="sign_header_ct"></div>
			</div>
		</div>
	    <div class="sign_section">
	    	<div class="sign_section_center">
	    		<div class="sign_section_left">
	    			<img src="../../assets/login_banner.jpg" alt="" />
	    		</div>
	    		<div class="sign_section_right"></div>
	    	</div>
	    </div>
	    <div class="sign_footer">
	    	<p>
	    		<a href=""><span></span>iPhone / iPad</a>
	    		<a href="">Android</a>
	    	</p>
	    	<p>
	    		<a href="">代理合作</a> | 
	    		<a href="">广告服务</a> | 
	    		<a href="">联系我们</a>
	    		&nbsp;&nbsp;&nbsp; © 2000 - 2017 北京艺龙信息技术有限公司, eLong, Inc or its affiliates. All Rights Reserved.
	    	</p>
	    </div>
	</div>
</template>

<script>
</script>

<style lang="scss" scope>
    .sign_header{
    	width: 100%;
    	height: 50px;
    	padding:25px 0;
    	.sign_header_center{
    		width: 1000px;
    		height: 50px;
    		margin:0 auto;
    		.sign_header_ct{
    			width: 113px;
    			height: 48px;
    			background:url("../../assets/myelong_login.png") no-repeat ;
    		}
    	}
    }
    .sign_section{
    	width: 100%;
    	height: 350px;
    }
    .sign_section_center{
    	width: 1000px;
    	height: 100%;
    	background-color:blue;
    	margin:0 auto;
    	display: flex;
    	justify-content: space-between;
    	.sign_section_left{
    		width: 620px;
    		height: 350px;
    	}
    	.sign_section_right{
    		width: 285px;
    		height: 322px;
    		padding:24px 45px 0px 45px;
    		background-color: red;
    	}
    }
    .sign_footer{
    	width: 1000px;
    	height: 60px;
    	padding: 50px 0px 30px 0;
    	margin:0 auto;
    	p:nth-of-type(1){
    		width: 100%;
    		height: 30px;
    		text-align: center;
    		line-height:30px;
    		a:nth-of-type(1){
    			display: inline-block;
    			width: 124px;
    			height: 22px;
    			margin-right: 30px;
    			color:#6E7179;
    			font-size: 13px;
    			background-color:red;
    		
    			span:{
    				display: inline-block;
    				width: 18px;
    				height: 22px;
    				background-color: lime;
    				/*background: url(../../assets/myelong_login.png) no-repeat 0px 0px;*/
    				
    			}
    		}
    		a:nth-of-type(2){
    			margin-right: 30px;
    			color:#6E7179;
    			font-size: 13px;
    		}
    	}
    	p:nth-of-type(2){
    		    width: 1000px;
    		    height: 30px;
    		    color: #555555;
			    font-size: 12px;
			    line-height: 30px;
			    text-align: center;
			    a{
			    	color:#6E7179;
			    }
			    a:hover{
			    	color:#FF6600;
			    }
    	}
    }
</style>