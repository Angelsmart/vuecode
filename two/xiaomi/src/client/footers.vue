<template>
	<div class="footer">
		<div class="footer_content">
			<div class="footer_logo"></div>
			<div class="footer_text">
				<p class="sites">
					<a href="">小米商城</a>
					<span>|</span>
					<a href="">MIUI</a>
					<span>|</span>
					<a href="">米家</a>
					<span>|</span>
					<a href="">米聊</a>
					<span>|</span>
					<a href="">多看</a>
					<span>|</span>
					<a href="">路由器</a>
					<span>|</span>
					<a href="">米粉卡</a>
					<span>|</span>
					<a href="">小米天猫店</a>
					<span>|</span>
					<a href="">隐私政策</a>
					<span>|</span>
					<a href="">问题反馈</a>
					<span>|</span>
					<a href="">Select Region</a>
				</p>
				<p>
					©mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2014]0059-0009号 
					<br />
					违法和不良信息举报电话：185-0130-1238，本网站所列数据，除特殊说明，所有数据均出自我司实验室测试
				</p>
			</div>
			<div class="footer_link">
				<a href=""><img src="../assets/truste.png" alt="" /></a>
				<a href=""><img src="../assets/v-logo-2.png" alt="" /></a>
				<a href=""><img src="../assets/v-logo-1.png" alt="" /></a>
				<a href=""><img src="../assets/v-logo-3.png" alt="" /></a>
				<a href=""><img src="../assets/ba10428a4f9495ac310fd0b5e0cf8370.png" alt="" /></a>
			</div>
		</div>
		<div class="footer_theme"></div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style lang="scss" scope>
.footer{
	width: 100%;
	height: 106px;
	padding: 30px 0;
	font-size: 12px;
	background: #fafafa;
	.footer_content{
		width: 1226px;
		height: 57px;
		/*background-color: skyblue;*/
		margin: 0 auto;
		overflow:hidden;
		.footer_logo{
			float: left;
		    width: 57px;
		    height: 57px;
		    margin-right: 10px;
		    background: url(../assets/logo-footer.png) no-repeat 50% 50%;
		}
		.footer_text{
			float: left;
		    color: #b0b0b0;
		    p{
		    	margin: 0;
			    line-height: 18px;
		    }
		    .sites{
		    	overflow: hidden;
		    	
		    	a{
		    		color: #757575;
		    		font-size: 12px;
		    		float: left;
		    	}
		    	a:hover{
		    		color: #ff6700;
		    	}
		    	span{
		    		margin: 0 .25em;
				    font-family: Georgia ;
				    float: left;
		    	}
		    }
		}
		.footer_link{
			float: right;
		    height: 28px;
		    margin: 4px 0 0;
		    a{
		    	img{
		    		width: 85px;
		    		height: 28px;
		    		margin-left: 0;
		    	}
		    }
		}
	}
	.footer_theme{
		margin: 30px auto 0;
		width: 267px;
		height: 19px;
		background: url(../assets/slogan2016.png) no-repeat center 0;
	}
}
</style>