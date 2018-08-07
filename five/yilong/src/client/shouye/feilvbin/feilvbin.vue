<template>
	<div class="feilvbin">
		<div class="fei_header">
			<div class="fei_header_c">
				<div class="fei_header_c_l">
					<img src="../../../assets/logo.jpg" alt="" />
				</div>
				<div class="fei_header_c_r">
					<ul v-for="(item,index) in $router.options.routes">
						<li v-for="child in item.children" v-if="!child.hidden">
							<router-link :to="{path:item.path+'/'+child.path}">
								{{ child.tabs }}
							</router-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	    <div class="fei_nav"></div>
	    <div class="fei_se">
	    	<div class="fei_se_center">
	    	    <ul>
	    	    	<li v-for="binf in bin.neir">
	    	    		<div class="fei_se_center_a">
		    	    		<a href="">
		    	    		  <img :src="binf.src" alt="" />
		    	    		</a>
		    	    		<div class="fei_se_center_d">
		    	    			<div>{{binf.name}}</div>
		    	    			<div>{{binf.txt}}</div>
		    	    		    <div>
		    	    		     	<p>{{binf.weizi}}</p>
		    	    		     	<p>{{binf.lianjie}}</p>
		    	    		     </div>
		    	    		    <div>
		    	    		    	<span>去看看</span>
		    	    		    	<span>暂无价格</span>
		    	    		    </div>
		    	    		</div>	
		    	    		<div class="fei_se_center_a_h"> 
		    	    		    <p>HoteL</p>
		    	    		    <p>{{binf.shu}}</p>
		    	    		</div>
	    	    		</div>
	    	    	</li>
	    	    </ul>
	    	</div>
	    </div>
	    <div class="fei_footer">
	    	© 1999 - 2016 eLong, Inc or its affiliates. All Rights Reserved.京ICP证010011号 京公网安备110000000021号
	    </div>
	</div>
</template>

<script>
    export default{
    	name:'feilvbin',
    	data(){
    		return {
    		   bin:[]
    		}
    	},
    	mounted(){	
			//axios请求数据
			this.$http.get('../../../../static/json/feilvbin.json').then((response) => {
				if(response.data.bin.code === 1){
					this.bin = response.data.bin
				}else{
            		console.log('获取失败');
            	}
            }).catch((error) =>{
            	console.log(error)
            })
			
		}
    }
</script>

<style lang="scss" scope>
   .feilvbin{
   	    background-color:#D3E9F7;
   }
   .fei_header{
   	   width: 100%;
   	   height: 47px;
   	   background-color:#FFFFFF;
   	   .fei_header_c{
   	   	  width: 1200px;
   	   	  height: 47px;
   	   	  margin:0 auto;
   	   	  display:flex;
   	   	  justify-content: space-between;
   	   	  .fei_header_c_l{
   	   	  	 width: 171px;
   	   	  	 height: 47px;
   	   	  }
   	   	  .fei_header_c_r{
   	   	  	 width: 524px;
   	   	  	 height: 35px;
   	   	     ul{
   	   	     	width: 100%;
   	   	     	height: 100%;
   	   	     	display:flex;
   	   	        justify-content: space-between; 
   	   	        li{
   	   	        	line-height: 40px;
   	   	        	font-size: 12px;
   	   	        	a{
   	   	        		color:#A5A5A5;
   	   	        	}
   	   	        }
   	   	     }
   	   	  }
   	   }
   }
   .fei_nav{
   	 width: 100%;
   	 height: 380px;
   	 background:url(../../../assets/000bplQC.jpg) no-repeat center;
   }
   .fei_se{
   	  width: 100%;
   	  height: 1953px;
   	  .fei_se_center{
   	  	 width: 1200px;
   	  	 height: 1953px;
   	  	 background-color:#D3E9F7;
   	  	 margin:0 auto;
   	  	 overflow:hidden;
   	  	 ul{
   	  	 	 width: 1200px;
   	  	     height: 1953px;
   	  	 	li{
   	  	 		width: 386px;
   	  	 		height: 631px;
   	  	 		margin-top:20px;
   	  	 		margin-right:10px;
   	  	 		background-color:#FFFFFF;
   	  	 		border-radius: 10px;
   	  	 		float: left;
   	  	 		.fei_se_center_a{
   	  	 			width: 100%;
   	  	 			height: 631px;
   	  	 			position: relative;
   	  	 			left: 0;
   	  	 			top:0;
   	  	 			.fei_se_center_a_h{
	   	  	 			position: absolute;
	   	  	 			left:42%;
	   	  	 			top:42%;
	   	  	 			width: 60px;
	   	  	 			height: 60px;
	   	  	 			background-color:#0A8C8F;
	   	  	 			border-radius: 50%;
	   	  	 			z-index: 10;
	   	  	 			p{
	   	  	 				width: 60px;
	   	  	 				height: 18px;
	   	  	 				text-align: center;
		   	  	 			line-height: 18px;
		   	  	 			color:#ffffff;
		   	  	 			margin:0 auto;
		   	  	 			margin-top:10px;
	   	  	 			}
	   	  	 			p:nth-of-type(2){
	   	  	 				font-size: 18px;
		   	  	 			font-style:italic;
	   	  	 			}
	   	  	 			
	   	  	 		}
   	  	 		}
                a{
                	display: block;
                	width: 100%;
                	height: 296px;
                	overflow: hidden;
                }
                .fei_se_center_d{
                	width: 346px;
                	height: 290px;
                	padding:45px 18px 0px 22px;
                	div:nth-of-type(1){
                		width: 346px;
                		height: 31px;
                		color:#0A8C8F;
                		font-size: 24px;
                		text-align: center;
                	}
                	div:nth-of-type(2){
                		width: 346px;
                		height: 106px;
                		padding-top:12px;
                		line-height: 21px;
						color: #666666;
						font-size: 14px;
                	}
                	div:nth-of-type(3){
                		width: 346px;
                		height: 69px;
                		padding-top:5px;
                		line-height: 26px;
						color: #666666;
						font-size: 14px;
						p{
							width: 346px;
							height: 32px;
							line-height: 32px;
						    color: #adacac;
						    font-size: 12px;
						}
                	}
                	div:nth-of-type(4){
                		width: 346px;
                		height: 40px;
                		span{
                			margin-top:5px;
                		}
                		span:nth-of-type(2){
                			display: inline-block;
                			color:#898989;
                			font-size: 14px;
                			line-height: 28px;
                			float: right;
                		}
                		span:nth-of-type(1){
                			display: inline-block;
                			width: 62px;
                			height: 28px;
                			background-color:#0A8C8F;
                			border-radius: 10px;
                			color:#ffffff;
                			font-size: 12px;
                			text-align: center;
                			line-height: 28px;
                			float: right;
                			margin-left:30px;
                			margin-right:10px;
                		}
                		
                	}
                }
   	  	 	}
   	  	 }
   	  }
   }
   .fei_footer{
   	  width: 100%;
   	  height: 60px;
   	  margin-top:20px;
   	  background-color:#FFFFFF;
   	  text-align: center;
   	  line-height: 60px;
   	  font-size: 12px;
   	  color:#959595;
   }
</style>