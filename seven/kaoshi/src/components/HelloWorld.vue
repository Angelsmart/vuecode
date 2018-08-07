<template>
  <div>
  	 {{msg}}
  	 <!--<input type="text" v-model="msg"/>-->
  	 <BB @sun="fu" :msg="msg"></BB>
  	 <!--<BB :msg="msg"></BB>-->
  </div>
</template>

<script>
	   import BB from "./bb";
			export default{
			data(){
				return {
					 msg:"父亲"
				}
			},
			components:{
				"BB":BB
			},
			methods:{
				fu(e){
					this.msg=e;
				}
			}
		}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

