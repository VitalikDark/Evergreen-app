import Vue from 'vue'
import Vuex from 'vuex'
import instance from "@/api/api";
import {createSearchQueryUSDT} from "@/utils/createSearchQueryUSDT";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usdtData: []
  },
  getters: {
    getUSDTData: (state) => state.usdtData
  },
  mutations: {
    setUSDTData(state, response) {
      state.usdtData = response
    }
  },
  actions: {
    loadUSDTData({ commit }, payload) {
      const { limit, offset } = payload
      const URL = createSearchQueryUSDT(payload)
      instance.get(`NBUStatService/v1/statdirectory/${URL}`)
      // https://bank.gov.ua/NBUStatService/v1/statdirectory/grossextdebt?s181=1&id_api=ED_IIP_GG_loans_L&freq=Q&json
          .then((response) => {
            commit('setUSDTData', response.data)
          })
    }
  },
  modules: {
  }
})
