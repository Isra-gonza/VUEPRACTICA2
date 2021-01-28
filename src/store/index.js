import Vue from 'vue'
import Vuex from 'vuex'
import APIservice from '../APIservice'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    empleados:[],
    clientes:[],
    campos:[],
  },
  mutations: {
    setEmpleados(state,empleados){
      state.empleados=empleados;
    }
  },
  actions: {
    loadEmpleados(context){
      APIservice.empleados.getAll()
      .then((response) =>{
        context.commit('setEmpleados', response.data)
      })
      .catch((err)=> alert(err));
    }
  },
  modules: {
  }
})
