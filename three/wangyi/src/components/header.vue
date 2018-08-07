<template>
	<div id="header">
		<div class="header_logo_content">
			<div class="logo">
				<img src="../assets/163logo.gif" />
			</div>
			<ul class="person_nav">
				<li v-for="names in name">
					<a href="">{{ names.name }}</a>
					<span v-for="list in names.asa">{{list}}</span>
				</li>
			</ul>
			<div class="search_mail">
				<i class="fa fa-search"></i>
				<input type="text" placeholder="支持全文搜索">
			</div>
		</div>
		<div class="header_tabs">
			<ul class="tabs">
				<li v-for="(item,index) in $router.options.routes">
					<span class="child_route" v-for="child in item.children">
						<router-link :to="{path:item.path+'/'+child.path}">
							{{ child.tabs }}
						</router-link>
					</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name:'header',
	components:{},
	data(){
		return {
			name:[],
			tabs:[]
		}
	},
	methods:{
		getHeadersData(){
			this.$http.get('../../static/json/data.json')
			.then(response =>{
				this.name = response.data.ming;
			})
			.catch(error =>{
				console.log(error);
			});
		},
		getTabsData(){
			this.$http.get('../../static/json/tabs.json')
			.then(response =>{
				this.tabs = response.data.navs;
			})
			.catch(error =>{
				console.log(error);
			});
		}
	},
	mounted(){
		this.getHeadersData();
		this.getTabsData();
	}
}
</script>
<style lang="scss" scope>
 @import '../../static/4.2.0/css/font-awesome.min.css';
 @import '../../static/scss/header';
</style>