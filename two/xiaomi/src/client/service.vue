<template>
	<div class="service">
		<div class="service_centent">
			<div class="service_centent_top">
				<ul>
					<li v-for="itm in num"><a href="">{{itm.mame}}</a></li>
				</ul>
			</div>
			<div class="service_centent_bottom">
				<dl>
					<dt>帮助中心</dt>
					<dd><a href="">账户管理</a></dd>
					<dd><a href="">购物指南</a></dd>
					<dd><a href="">订单操作</a></dd>
				</dl>
				<dl>
					<dt>服务支持</dt>
					<dd><a href="">售后政策</a></dd>
					<dd><a href="">自助服务</a></dd>
					<dd><a href="">相关下载</a></dd>
				</dl>
				<dl>
					<dt>线下门店</dt>
					<dd><a href="">小米之家</a></dd>
					<dd><a href="">服务网点</a></dd>
					<dd><a href="">零售网点</a></dd>
				</dl>
				<dl>
					<dt>关于小米</dt>
					<dd><a href="">了解小米</a></dd>
					<dd><a href="">加入小米</a></dd>
					<dd><a href="">联系我们</a></dd>
				</dl>
				<dl>
					<dt>关注我们</dt>
					<dd><a href="">新浪微博</a></dd>
					<dd><a href="">小米部落</a></dd>
					<dd><a href="">官方微信</a></dd>
				</dl>
				<dl>
					<dt>特色服务</dt>
					<dd><a href="">F 码通道</a></dd>
					<dd><a href="">礼物码</a></dd>
					<dd><a href="">防伪查询</a></dd>
				</dl>
				<div class="service_centent_bottom_centent">
					<p class="phone">400-100-5678</p>
					<p>	
                                                            周一至周日 8:00-18:00
                        <br />
                                                            （仅收市话费）
					</p>
					<a href=""> 24小时在线客服</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				num:[
				{
    				'mame':'预约维修服务'
    		    },
    			{
    				'mame':'7天无理由退货'
    			},
    			{
    				'mame':'15天免费换货'
    			},
    			{
    				'mame':'满150元包邮'
    			},
    			{
    				'mame':'520余家售后网点'
    			},
				]
			}
		}
	}
</script>

<style lang="scss" scope>
.service{
	width: 100%;
	height: 272px;
	/*background-color: skyblue;*/
	.service_centent{
		width: 1226px;
		height: 100%;
		margin: 0 auto;
		/*background-color: orange;*/
		.service_centent_top{
			width: 100%;
			height: 25px;
			/*background-color: pink;*/
			padding: 27px 0;
            border-bottom: 1px solid #e0e0e0;
            ul{
            	width: 100%;
                height: 100%;
            	margin: 0;
            	padding: 0;
            	list-style-type: none;
            }
            li:first-child{
            	border: 0;
            }
            li{
            	float: left;
			    width: 19.8%;
			    height: 25px;
			    border-left: 1px solid #e0e0e0;
			    font-size: 16px;
			    line-height: 25px;
			    text-align: center;
			    a{
			    	color: #000000;
			    }
			    a:hover{
			    	color: #ff6700;
			    }
            }
		}
		.service_centent_bottom{
			width: 100%;
			height: 112px;
			padding: 40px 0;
			/*background-color: lime;*/
			dl{
				float: left;
			    width: 160px;
			    height: 112px;
			    margin: 0;
			    dt{
			    	margin: -1px 0 26px;
				    font-size: 14px;
				    line-height: 1.25;
				    color: #424242;
			    }
			    dd{
			    	margin: 10px 0 0;
				    font-size: 12px;
				    a{
				    	color: #757575;
				    }
				    a:hover{
				    	color: #ff6700;
				    }
			    }
			}
			.service_centent_bottom_centent{
				float: right;
			    width: 251px;
			    height: 112px;
			    border-left: 1px solid #e0e0e0;
			    text-align: center;
			    color: #616161;
			    p{
			    	margin: 0 0 16px;
				    font-size: 12px;
			    }
			    .phone{
			    	margin: 0 0 5px;
				    font-size: 22px;
				    line-height: 1;
				    color: #ff6700;
			    }
			    a{
			    	width: 118px;
				    height: 28px;
				    font-size: 12px;
				    line-height: 28px;
			    	display: inline-block;
			    	border: 1px solid;
			    	border-color: #ff6700;
				    background: #fff;
				    color: #ff6700;
				    transition: all .4s;
			    }
			    a:hover{
			    	background-color: #ff6700;
			    	color: #FFFFFF;
			    }
			}
		}
	}
}
</style>