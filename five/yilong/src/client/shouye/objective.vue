<template>
	<div>
		<div class="objective_finger">
	    	<span>目的地指数</span>   
	    	<span>覆盖全球75万家酒店，你想住的，我们都有</span>
	    </div>
	    <div class="domestic">
	    	<div class="domestic_left">{{items.name}}</div>
	    	<div class="domestic_center domestic_center_one">
	    		<span v-for="item in items.content">{{item.name}}</span>
	    	</div>
	    	<div class="domestic_right">更多>></div>
	    </div>
	    <div class="tab tab_one">
	    	<ul v-for="item in items.content">
	    		<li v-for="ming in item.content">
	    			<div>
	    				<router-link to="/huangshan">
	    					<img :src="ming.src" alt="" />
	    				    <h3>{{ming.h1}}</h3>
	    				</router-link>
	    				
	    			</div>
	    			<div>{{ming.txt}}</div>
	    		</li>
	    	</ul>
	    </div>
	    <div class="domestic">
	    	<div class="domestic_left">{{itemc.name}}</div>
	    	<div class="domestic_center domestic_center_two">
	    		<span v-for="item in itemc.content">{{item.name}}</span>
	    	</div>
	    	<div class="domestic_right">更多>></div>
	    </div>
	    <div class="tab tab_two">
	    	<ul v-for="item in itemc.content">
	    		<li v-for="ming in item.content">
	    			<div>
	    				<img :src="ming.src" alt="" />
	    				<h3>{{ming.h1}}</h3>
	    			</div>
	    			<div>{{ming.txt}}</div>
	    		</li>
	    	</ul>
	    	
	    </div>
	</div>
</template>

<script>
	export default{
		name:"objective",
		components:{},
		data(){
			return {
				items:[],
				itemc:[]
			}
		},
		methods:{
				
			
		},
		updated(){
			let upperone = document.querySelectorAll('.domestic_center_one span');
			let lowerone = document.querySelectorAll(".tab_one ul");
			for(let i=0;i<upperone.length;i++){
				upperone[i].index=i;
				upperone[0].classList.add("spanado");
				upperone[i].onclick=function(){
					for(let j=0;j<lowerone.length;j++){
						lowerone[j].style.zIndex=0;
						upperone[j].classList.remove("spanado");
					};
					lowerone[this.index].style.zIndex=2;
					upperone[this.index].classList.add("spanado");
					
				};
			};
			let uppertwo = document.querySelectorAll('.domestic_center_two span');
			let lowertwo = document.querySelectorAll(".tab_two ul");
			for(let i=0;i<uppertwo.length;i++){
				uppertwo[i].index=i;
				uppertwo[0].classList.add("spanado");
				uppertwo[i].onclick=function(){
					for(let j=0;j<lowertwo.length;j++){
						lowertwo[j].style.zIndex=0;
						uppertwo[j].classList.remove("spanado");
					};
					lowertwo[this.index].style.zIndex=2;
					uppertwo[this.index].classList.add("spanado");
					
				};
			};
		},
		mounted(){	
			//axios请求数据
			this.$http.get('../../../static/json/gounei.json').then((response) => {
				if(response.data.guonei.code === 1){
					this.items = response.data.guonei
					this.itemc = response.data.guowai
				}else{
            		console.log('获取失败');
            	}
            }).catch((error) =>{
            	console.log(error)
            })
			
		}
	}
</script>

<style lang='scss' scope>
	.objective_finger{
            width: 100%;
            height: 44px;
            border-bottom:2px solid #FF6666;
            line-height: 44px;
            span:nth-of-type(1){
                 color:#FF6666;
                 font: 22px Microsoft Yahei;
            }
            span:nth-of-type(2){
                 color:#999999;
                 font: 14px Microsoft Yahei;
            }
    }
    .domestic{
    	width: 1200px;
    	height: 28px;
    	padding:10px 0;
    	color:#555555;
    	.domestic_left{
    		color:#555555;
    		font: 18px Microsoft Yahei;
    		width: 85px;
    		height: 26px;
    		line-height: 28px;
    		float: left;
    	}
    	.domestic_center{
    		height: 100%;
    		float: left;
    		font: 15px Microsoft Yahei;
    		line-height: 28px;
    		cursor: pointer;
    		span{
    			display: inline-block;
    			width: 76px;
    			height: 24px;
    			margin:0 15px;
    			text-align: center;
    			line-height: 24px;
    		}
    		.spanado{
    			background-color:#FF6666;
    			color:#EEEEEE;
    			border-radius: 10px;
    		}
    		.spanado:hover{
    			color:#EEEEEE;
    		}
    		span:hover{
    			width: 74px;
    			height: 22px;
    			line-height: 22px;
    			border-radius: 10px;
    			border: 1px solid #FF6666;
    			color:#FF6666;
    		}
    	}
    	.domestic_right{
    		float: right;
    		font: 14px Microsoft Yahei;
    		line-height: 28px;
    	}
    }
    .domestic:nth-last-of-type(2){
    	margin-top:15px;
    }
    .tab{
    	width: 1215px;
    	height: 202px;
    	position: relative;
    	ul{
    		width: 100%;
    		height: 100%;
    		background-color:#ffffff;
    		position: absolute;
    		li{
    			float: left;
    			margin-right:9px;
    			div:nth-of-type(1){
    				width: 293px;
    				height: 160px;
    				position:relative;
    				overflow:hidden;
    				img{
    					position: absolute;
    					top:0;
    					left:0;
    				}
    				img:hover{
    					transition: all 0.3s;	
    					top:-10px;
    				}
    				h3{
    					height: 50px;
    					position: absolute;
    					left:15px;
    					bottom: 0;
    					text-align: center;
    					color:#eeeeee;
    					line-height: 50px;
    				}
    			}
    			div:nth-of-type(2){
    				width: 283px;
    				height: 30px;
    				padding:5px;
    				border-bottom: 1px solid #cccccc;
    				color: #555;
                    font: 14px/30px Microsoft yahei;
    			}
    		} 
    		li:hover div:nth-of-type(2){
    			 border-bottom: 3px solid #FF6666;
    		}
    		li:hover div img{
    			transition: all 0.3s;	
    			top:-10px;
    		}
    	}
    	ul:nth-of-type(1){
    		z-index: 2;
    	}
    }
</style>