<template>
	<div>
		<div id="box">
			<ul>
				<li v-for='(iem,index) in num'>
					<i :class="'log'+index"></i><span>{{iem}}</span>
				</li>
			</ul>
	    </div>
	</div>
	
</template>

<script type='text/ecmascript-6'>
	export default{
		data(){
			return{
				num:['全球110万家酒店','订酒店返现金高达20%','国际酒店8折起','7×24小时服务']
			}
		},
		mounted(){
			
		},
		created(){
			
		}
	}
</script>

<style lang='scss' scope>
	#box{
		padding: 20px;
		width: 1160px;
		height: 60px;
		background: #f7f7f7;
		border-bottom: 1px solid #e5e5e5;
		margin:0 auto;
		margin-top:20px;
		ul{
			li{
				width: 290px;
				height: 60px;
				float: left;				
				i{
					float: left;
				    height: 60px;
				    width: 60px;
				    margin: 0 10px 0 0;
				    background: url(../../assets/icon_index.png) -91px -4px;
				    &.log0{
				    	background-position: -91px -4px ;
				    }
				    &.log1{
				    	background-position:-159px -4px ;
				    }
				    &.log2{
				    	background-position:-228px -4px  ;
				    }
				    &.log3{
				    	background-position:-295px -6px ;
				    }
				}
				span{
					line-height: 60px;
					font-size: 16px;
					color: #666;
				}
				&:hover{
					i{
						animation:haha 0.5s  infinite;
					}
				}
				@keyframes haha{
					from{
						transform: rotate(0deg);
					}
					30%{
						transform: rotate(-10deg);
					}
					70%{
						transform: rotate(10deg);
					}
					to{
						transform: rotate(0deg);
					}
				}
			}
		}
	}
</style>