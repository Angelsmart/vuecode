<template>
	<div id="footers">
		<footer>
			<div class="foot_t">
				<dl class="dl_1">
					<dt>加盟合作</dt>
				    <dd><a href="">酒店加盟</a></dd>
				    <dd><a href="">开放平台</a></dd>
				    <dd><a href="">代理合作</a></dd>
				    <dd><a href="">广告服务</a></dd>
				    <dd><a href="">商家中心</a></dd>
				</dl>
				<dl class="dl_2">
					<dt>关于艺龙</dt>
				    <dd><a href="">酒店大全</a></dd>
				    <dd><a href="">国际酒店</a></dd>
				    <dd><a href="">校园招聘</a></dd>
				    <dd><a href="">联系我们</a></dd>
				</dl>
				<dl class="dl_3">
					<dt>艺龙APP下载</dt>
				    <dd><i class="wei_1"></i></dd>
				</dl>
				<dl class="dl_4">
					<dt>艺龙官方微信</dt>
				    <dd><i class="wei_2"></i></dd>
				</dl>
				<dl class="dl_5">
					<dt>艺龙官方小程序</dt>
				    <dd><i class="wei_3"></i></dd>
				</dl>
			</div>
			<div class="foot_c">
				 © 2000 - 2017 北京艺龙信息技术有限公司, eLong, Inc or its affiliates. All Rights Reserved. 
				 <a href="">京ICP证010011号</a>
				 <a href="">
				 	<i class="gunan"></i>
				 京公网安备11010502026059号</a>
				 <a href="">
				 	<i class="gunan_2"></i>
				 	经营执照
				 </a>
			</div>
			<div class="foot_b">
				<a href="" class="a_1"></a>
				<a href="" class="a_2"></a>
				<a href="" class="a_3"></a>
				<a href="" class="a_4"></a>
				<a href="" class="a_5"></a>
				<a href="" class="a_6"></a>
			</div>
		</footer>
	</div>
</template>

<script>
	export default{
		name:'footers'
	}
</script>

<style lang='scss' scope>

#footers{
	footer{
		width: 100%;
		height: 252px;
		padding: 20px 0px;
		margin-top: 20px;
		border-top: 1px solid #eee;
		min-width: 1000px;
		overflow: hidden;
		.foot_t{
			width:1000px;
			height: 148px;
			margin:0 auto;
			font-size: 12px;

			.dl_1,.dl_2{
				width: 18%;
				height: 148px;
				padding-left: 20px;
				float: left;
				padding-left: 2%;
			}
			.dl_3,.dl_4,.dl_5{
				height: 138px;
				width: 18%;
				padding-left: 20px;
				float: left;
				padding-left: 1.5%;
			}
			dt{
				border-left: 3px solid #5D96C7;
			    padding: 0 0 0 10px;
			    height: 18px;
			    font: 18px/1 Microsoft Yahei;
			    margin-bottom: 10px;
			}
			.wei_1{
				width: 100px;
				height: 100px;
				display: inline-block;
				background:url(../../assets/icon201706.png) -259px -56px no-repeat;
			}
			.wei_2{
				width: 100px;
				height: 100px;
				display: inline-block;
				background:url(../../assets/icon201706.png) -362px -58px no-repeat;
			}
			.wei_3{
				width: 100px;
				height: 100px;
				display: inline-block;
				background:url(../../assets/icon201706.png) -155px -56px no-repeat;
			}
			dd{
				margin-left: 12px;
				padding-left: 14px;
			    line-height: 24px;
			}
			a{
				color: #333;
				transition:all 0.5s;
			}
			a:hover{
				color: red;
				margin-left: 5px;
			}
		}
		.foot_c{
			width: 100%;
			height:27px;
			margin:20px 0;
			text-align: center;
			font-size:12px;
			color:#333;
			.gunan{
				width: 20px;
				height: 20px;
				display:inline-block;
				background:url(../../assets/anbei.png);
			}
			.gunan_2{
				width: 22px;
				height: 27px;
				display:inline-block;
			}
			a{
				color: #333;
			}
		}
		.foot_b{
			width:600px;
			height:37px;
			text-align:center;
			margin: 0 auto;
			a{
				float: left;
				transition:all 0.5s;		
				margin: 0 8px;
				&:hover{
					margin-top:-5px ;
				}
			}
			.a_1{
				display:inline-block;
				width: 80px;
				height:37px;
				background:url(../../assets/icon201706.png) -329px -436px no-repeat;
			}
			.a_2{
				display:inline-block;
				width: 60px;
				height:37px;
				background:url(../../assets/icon201706.png) -331px -482px no-repeat;
			}
			.a_3{
				display:inline-block;
				width: 92px;
				height:37px;
				background:url(../../assets/icon201706.png) -473px -436px no-repeat;
			}
			.a_4{
				display:inline-block;
				width: 92px;
				height:37px;
				background:url(../../assets/icon201706.png) -565px -436px no-repeat;
			}
			.a_5{
				display:inline-block;
				width: 92px;
				height:37px;
				background:url(../../assets/icon201706.png) -657px -436px no-repeat;
			}
			.a_6{
				display:inline-block;
				width: 83px;
				height:37px;
				background:url(../../assets/icon201706.png) -393px -477px no-repeat;
			}
		}
	}
	}
</style>
