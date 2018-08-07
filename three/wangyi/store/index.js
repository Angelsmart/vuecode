import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const state = {
	//此处只存储数据
//	userList:[],
	num:8,
	sendList:{
		ming:"柯南"
	}
}
const actions = {
	
}
const mutations = {
	changName(state){
		this.state.sendList.ming+='真帅'
	}
}
const setters = {
	
}
const getters = {
	
}
export default new  Vuex.Store({
	state,
	actions,
	mutations,
	setters,
	getters
});

