<template>
  <div>
     {{msg}}
     <!--点击的时候触发改变路由的函数-->
     <button @click="toAview">点击切换</button>
  </div>
</template>

<script>
	export default{
			data(){
				return {
					 msg:"123"
				}
			},
			methods:{
				toAview(){
					//改变路由
					this.$router.push({
						path:'/eva'
					})
				}
			},
			//旧組件： destroy
			destroyed(){
					this.Bus.$emit('sendToParent',this.msg);
				
			}

		}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

