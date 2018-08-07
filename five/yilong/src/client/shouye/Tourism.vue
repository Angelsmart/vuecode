<template>
	<div>
		<div class="tourism_finger">
	    	<span>旅游指南</span>
	    </div>
	    <div class="tourism_x">
	    	<div class="tourism_x_l">
	    		<ul class="tourism_x_l_ul">
	    			<li>
	    				<b>京郊民宿 吃热气腾腾火锅盆</b>
	    				<span class="tspan"></span>
	    			</li>
	    			<li>
	    				<b>盘点江浙沪亲子酒店</b>
	    				<span class="tspan"></span>
	    			</li>
	    			<li>
	    				<b>泸沽湖客栈的正确打开方式</b>
	    				<span class="tspan"></span>
	    			</li>
	    			<li>
	    				<b>泸沽湖客栈的正确打开方式</b>
	    				<span class="tspan"></span>
	    			</li>
	    		</ul>
	    		<ol class="tourism_x_l_ol">
	    			<li v-for="itm in sss">
	    				<div>
	    					<img :src="itm.name" alt="" />	
	    				</div>
			   		    <!--<div>
	    					22
	    				</div>-->
			   	    </li>	
	    		</ol>
	    	</div>
	    	<ul class="tourism_x_r">
	    		<li v-for="itc in mmm">
	    			<router-link :to=itc.src target="_blank">
	    				<div>
	    					<img :src="itc.name" alt="" />
		    			</div>
		    			<div>{{itc.tex}}</div>
	    			</router-link>
	    			
	    		</li>
	    	</ul>
	    </div>
	</div>
   
</template>

<script>
	import img1 from '../../assets/17121251.jpg'
	import img2 from '../../assets/17121252.jpg'
	import img3 from '../../assets/17121253.jpg'
	import img4 from '../../assets/17121254.jpg'
	import img5 from '../../assets/17121256.jpg'
	import img6 from '../../assets/17121255.jpg'
	
	export default{
		name:'Tourism',
		component:{},
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
		 			},
		 			{
		 				'name':img4
		 			}
	 			],
	 			mmm:[
	 			    {
	 			    	'name':img5,
	 			    	'tex':'菲律宾 9座岛屿梦幻假期',
	 			    	'src':'/feilvbin'
	 			    },
	 			    {
	 			    	'name':img6,
	 			    	'tex':'今冬北京 圣诞情浓',
	 			    	'src':'/kaoya'
	 			    }
	 			]
	 		}
		},
		mounted(){
			let tcot = document.querySelectorAll('.tourism_x_l_ul li');
			let bcot = document.querySelectorAll(".tourism_x_l_ol li");
			let tspan = document.querySelectorAll(".tourism_x_l_ul .tspan");
			tcot[0].style.backgroundColor = "#89CA00";
			tspan[0].style.display = "block";
			for(let i=0;i<tcot.length;i++){
				tcot[i].index=i;
				tcot[i].onmouseover=function(){
					for(let j=0;j<bcot.length;j++){
						bcot[j].style.zIndex=0;
						tcot[j].style.backgroundColor = "";
					    tspan[j].style.display = "none";
					}
					bcot[this.index].style.zIndex=2;
					tcot[this.index].style.backgroundColor = "#89CA00";
					tspan[this.index].style.display = "block";
		
				}
			}
		}
		
	}
</script>

<style lang="scss" scope>
	.tourism_finger{
	        width: 100%;
	        height: 44px;
	        border-bottom:2px solid #77CC11;
	        line-height: 44px;
	        span{
	            color:#77CC11;
	            font: 22px Microsoft Yahei;
	        }
	}
	.tourism_x{
		width: 100%;
		height: 222px;
		padding-top:10px;
		display: flex;
		justify-content: space-between;
		.tourism_x_l{
			width: 580px;
			height: 220px;
			display: flex;
		   justify-content: space-between;
			ul{
				width: 220px;
				height: 100%;
				li{
					width: 222px;
					height: 54px;
					line-height: 54px;
					text-indent: 10px;
					border-bottom:1px solid #cccccc;
					color:#555555;
					font-size: 14px;
					cursor: pointer;
					position: relative;
					.tspan{
						display: inline-block;
						width: 20px;
						height: 20px;
						position: absolute;
						z-index: 10;
						right: -8px;
						top:20px;
						background-color:#89CA00;
						transform:rotate(45deg);
						display: none;
					}
				}
			}
			ol{
				width: 380px;
				height: 220px;
				position: relative;
				li{
					width: 100%;
					height: 100%;
					position: absolute;
					left:0;
					top:0;
					overflow: hidden;
					div:nth-of-type(1){
						width: 380px;
				        height: 220px;
						position: relative;
						img{
							width: 100%;
							height: 100%;
						}
					}
				}
			}
		}
		.tourism_x_r{
			width: 600px;
			height: 222px;
			display: flex;
			justify-content: space-between;
			li{
				width: 290px;
				height: 221px;
				border-bottom: 1px solid #cccccc;
				div:nth-of-type(1){
					width: 100%;
					height: 180px;
					img{
						width: 100%;
						height: 100%;
					}
				}
				div:nth-of-type(2){
					width: 100%;
					height: 40px;
					font-size:14px;
					color:#3377EE;
					line-height: 40px;
				}
				div:nth-of-type(2):hover{
					color:red;
				}
			}
			li:hover{
				border-bottom:2px solid #77CC11;
			}
		}
	}
	    
</style>