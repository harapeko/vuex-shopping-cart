import Vuex from "vuex"
import Vue from 'vue'

Vue.use(Vuex)

new Vuex.Store({
  state: { // = data
    products: []
  },

  getters: { // = computed properties
    productsCount () {
      // ...
    }
  },

  actions: { // = methods
    fetchProducts () {
      // make the call
    }
  },

  mutations: { // 状態を更新する
    setProducts () {
      // update products
    }
  }
})