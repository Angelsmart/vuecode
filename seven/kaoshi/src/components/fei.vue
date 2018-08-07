<template>
	<div>
		<h1>{{name}}</h1>
		<p v-for="binr in bin">
			{{binr.name}}
		</p>
		<!--<h2 v-for="binl in jin">
			{{binl.name}}
		</h2>-->
		<p>{{dd}}</p>
	</div>
</template>

<script>
	export default {
		name: 'Fei',
		data(){
			return {
				name : "明明",
				bin:[],
//				jin:[],
				dd:'',
			}
		},
		/*mounted(){
			this.$http.get('../../../../static/json/feilvbin.json').then((response) => {
					this.bin = response.data.bin.neir
					this.jin = response.data.bin.neil
            }).catch((error) =>{
            	console.log(error)
            })
			
		}*/
		mounted(){
			this.$http.get("../../../../static/json/feilvbin.json").then((res)=>{
				console.log(res);
				const {
					bin:{
						aa,
						neir
					},
				} = res.data;
				
				this.bin = neir;
//				this.jin = neil;
				this.dd = aa;
				console.log(1)
			}).catch((error) => {
				console.log(error)
			})
		}
	}
</script>

<style>
</style>