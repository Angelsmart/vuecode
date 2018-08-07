<template>
	<div id="admin">
		<!--client是专门写组件的文件夹,也就是.vue后缀的文件
		utils是专门写数组、对象之类的截取方法以及时间戳格式化的方法
		store是专门存储数据，管理状态的文件夹
		<button @click='tonotFined'>危险按钮</button>
		<el-button type='danger'>危险按钮</el-button>
		<br />
		<router-link to="/index/index">去首页</router-link>
		<br />
		<router-link to="/income/income">去收入页面</router-link>-->
		<header class="hh">我是头部
		   <el-button @click="toIndex" type="primary">主要内容</el-button>
		</header>
		<section>
			<aside>
			 <!--  <ul>
			   	<li v-for="(item,index) in $router.options.routes">
			   	 	<router-link :to="{path:item.path}">{{item.alias}}</router-link>
				   	 <ol>
				   	 	<li v-for="child in item.children">
				            <router-link :to="{path:item.path +'/'+child.path}">
				                   {{child.alias}}
				            </router-link> 
				   	 	</li>
				   	 </ol>
				   	 
			   	</li>
			   </ul>-->
			    <ul>
			    	<li v-for="item in items">
			    		{{item.name}}
			    	</li>
			    </ul>  
			  
			   <div class="kk">
			   	   
			   	   <div><i class="fa fa-camera-retro"></i> fa-camera-retro</div> 
			   </div>			
			</aside>
			
			<section>
				<router-view></router-view>
			</section>
		</section>
	</div>
</template>

<script>	
	import 'whatwg-fetch';
	export default{
		name:"admin",
		components:{},
		data(){
			return {
				items:[]
			}
			
		},
		methods:{
			tonotFined:function(){
				this.$router.push({
					path:"/notFined"
				})	
			}
		},
		methods:{
			toIndex:function(){
				this.$router.push({
					path:"/index/index"
				})	
			}
		},
		mounted(){
//		获取后台数据axios方法
            /*this.$http.get('../static/data.json').then((response) => {
            	if(response.data.code === 1){
            		this.items = response.data.zimogod;
            	}else{
            		console.log('获取失败');
            	}
            }).catch((error) =>{
            	console.log(error)
            });*/
          fetch('../static/data.json').then((response)=> {
            return response.json();
        }).then((data) => {
            this.items = data.zimogod;
            console.log(data);
        }).catch((error) => {
            console.log(error);
        });

           
           
		}
	}
	
	 /*export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }*/
	
</script>

<style lang="scss" scope>
    @import "../static/4.2.0/css/font-awesome.min.css"; 
	#admin{
		width: 100%;
		height: 100px;
		background:#fff;
		header{
			width: 100%;
			height: 80px;
			background:#ccc;
		}
		section{
			width: 100%;
			background:yellow;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			aside{
				width: 500px;
				height: 500px;
				background:#E0E0E0;
				.kk{
					width: 100px;
					height: 20px;
					background: lime;
				}
			}
			section{
				flex: 1;
				background:lime;
			}
		}
	}
</style>
