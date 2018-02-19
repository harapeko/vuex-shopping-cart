import Vuex from "vuex"
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
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
      // run setProducts mutation
    }
  },

  // 設定と状態を更新する
  // Mutationsは1つのstateの変更に対して応答することができる
  mutations: {
    // Mutationsは状態を変更するための責任があるので、
    // Vuexは自動的に第一引数にstateを渡します
    // 追加パラメータを渡すことができ、
    // Mutationsを呼び出すときこれはペイロードになる
    // この例ではpayloadはproductsです
    // stateが現在のアプリケーションの状態
    // payloadはデータを変更するオプション
    setProducts (state, products) {
      // update products
      // state.productsにpayloadのproductsを代入してstateを更新できる
      // Mutationsの目的は、データ取得や複雑な計算をするのではなく、
      // 状態を更新することであることに留意してください。
      // これで十分でしょう
      state.products = products
    }
  }
  // Mutationsは可能な限りシンプルでなければならない
  // そしてstateの一部だけを更新する責任があります
  // ActionsはMutationsと異なり複雑になる可能性があるが、
  // stateを更新することはない
  // ActionsとMutationsのこのパターンに従えば、
  // バグは少ないものになるだろう
})