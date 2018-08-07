<template>
	<div>
		<div class="supers_finger">
	    	<span>超值特价票</span>   
	    </div>
	    <div class="supersc supersc_one">
	    	<div class="domestic_left">{{items.name}}</div>
	    	<div class="domestic_center">
	    		<span v-for="item in items.content">{{item.name}}</span>
	    	</div>
	    	<div class="domestic_right">更多>></div>
	    </div>
	  	<div class="supers_tab supers_tab_one">
		    <ul v-for="item in items.content">
		    	<li v-for="ming in item.content">
		    		<span>
		    			<b>{{ming.to}}</b>
		    			<i>---</i>
		    			<b>{{ming.from}}</b>
		    		</span>
		    		<span>
		    			<b>{{ming.yue}}</b>
		    			<i>{{ming.zhe}}折</i>
		    			<b>{{ming.qian}}</b>
		    		</span>
		    	</li>
		    </ul>
		</div>	
		
		<div class="supersc supersc_two">
			<div class="domestic_left">{{itemc.name}}</div>
			<div class="domestic_center">
			    <span v-for="item in itemc.content">{{item.name}}</span>
			</div>
			<div class="domestic_right">更多>></div>
		</div>
		<div class="supers_tab supers_tab_two">
			<ul v-for="item in itemc.content">
				<li v-for="ming in item.content">
				    <span>
				    	<b>{{ming.to}}</b>
				    	<i>---</i>
				    	<b>{{ming.from}}</b>
				    </span>
				    <span>
				        <b>{{ming.yue}}</b>
				    	 <em></em>
				    	<b>{{ming.qian}}</b>
				    </span>
				</li>
			</ul>
		</div>			
	</div>
</template>

<script>
	export default{
		name:"supers",
		component:{},
		data(){
			return {
				items:[],
				itemc:[]
			}
		},
		updated(){
			let tcotone = document.querySelectorAll('.supersc_one span');
			let bcotone = document.querySelectorAll(".supers_tab_one ul");
			for(let i=0;i<tcotone.length;i++){
				tcotone[i].index=i;
				tcotone[0].classList.add("spanads");
				tcotone[i].onclick=function(){
					for(let j=0;j<bcotone.length;j++){
						bcotone[j].style.zIndex=0;
                        tcotone[j].classList.remove("spanads");
                       
					};
					bcotone[this.index].style.zIndex=2;
					tcotone[this.index].classList.add("spanads");
				};
			};
			
			let tcottwo = document.querySelectorAll('.supersc_two span');
			let bcottwo = document.querySelectorAll(".supers_tab_two ul");
			for(let i=0;i<tcottwo.length;i++){
				tcottwo[i].index=i;
				tcottwo[0].classList.add("spanads");
				tcottwo[i].onclick=function(){
					for(let j=0;j<bcottwo.length;j++){
						bcottwo[j].style.zIndex=0;
                        tcottwo[j].classList.remove("spanads");
                       
					}
					bcottwo[this.index].style.zIndex=2;
					tcottwo[this.index].classList.add("spanads");
				};
			};
		},
		mounted(){
			this.$http.get('../../../static/json/chaozhi.json').then((response) => {
				if(response.data.jipiao.code === 1){
					this.items = response.data.jipiao
					this.itemc = response.data.huochepiao
				}else{
					console.log('获取失败');
				}
			}).catch((error) => {
				console.log(error)
			})
		}
	}
</script>

<style lang='scss' scope>
	.supers_finger{
            width: 100%;
            height: 44px;
            border-bottom:2px solid #4499FF;
            line-height: 44px;
            span{
                 color:#4499FF;
                 font: 22px Microsoft Yahei;
            }
    }
    .supersc{
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
    		.spanads{
    			background-color:#4499FF;
    			color:#EEEEEE;
    			border-radius: 10px;
    		}
    		.spanads:hover{
    			color:#EEEEEE;
    		}
    		span:hover{
    			width: 74px;
    			height: 22px;
    			line-height: 22px;
    			border-radius: 10px;
    			border: 1px solid #4499FF;
    			color:#4499FF;
    		}
    	}
    	.domestic_right{
    		float: right;
    		font: 14px Microsoft Yahei;
    		line-height: 28px;
    	}
    } 
 .supers_tab{
    	width: 1215px;
    	height: 102px;
    	margin-bottom: 20px;
        background-color:lime;
        position: relative;
        ul{
        	width: 100%;
        	height: 100%;
        	background-color:#ffffff;
        	position: absolute;
        	z-index: 0;
        	left:0;
        	top:0;
        	li{
        		width: 198px;
        		height: 100%;
        		background-color: #F4F9FF;
        		border: 1px solid #D8E8FE;
        		float: left;
        		cursor: pointer;
        		span{
        			display: block;
        			width: 198px;
        			height: 30px;
        			color:#555555;
        			text-align: center;
        		}
        	    span:nth-of-type(1){
        	    	font-size: 14px;
        	    	margin-top:25px;
        	    	b{
        				display: inline-block;
        				width: 70px;
        				height: 30px;
        			}
        	    }
        	    span:nth-of-type(2){
        	    	font-size: 10px;
        	    	i{
        	    		display:inline-block;
        	    		width: 36px;
        	    		height: 20px;
        	    		background-color: #009900;
        	    		border-radius: 10px;
        	    		color:#ffffff;
        	    		text-align: center;
        	    		line-height: 20px;
        	    	}
        	    	em{
        	    		display:inline-block;
        	    		width: 36px;
        	    		height: 20px;
        	    	}
        	    	b{
        				display: inline-block;
        				width: 60px;
        				height: 30px;
        			}
        	    	b:nth-of-type(2){
        	    		color:red;
        	    	}
        	    } 
        	}
        	li:hover{
        		border: 1px solid #4599FF;
        	}
        }
        ul:nth-of-type(1){
        	z-index: 2;
        }
    }    
</style>