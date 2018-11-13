import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {//你的状态
        isNavShow: true,
    },
    getters: {
        //类似计算属性
    },
    mutations:{
        //更改状态
        setNavShow(state,flag){
            state.isNavShow = flag;
        },
    }
})