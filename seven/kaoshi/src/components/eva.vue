<template>
  <div>
     {{num}}
  </div>
</template>

<script>
	export default{
			data(){
				return {
					 num:"0000"
				}
			},
			methods:{
				
			},
			beforeCreate(){
				var that = this;
				console.log(this)
				this.Bus.$on('sendToParent',function(msg){
					that.num = msg;
					console.log(that.num)
				})
			}
		}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

