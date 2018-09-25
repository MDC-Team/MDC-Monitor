const state = {
  logConfirmFlag : true,
  logCount : 0
}
const getters = {
}
const actions = {
}
const mutations = {
  setLogConfirmFlag(state, confirmFlag){
    state.logConfirmFlag = confirmFlag
  },
  setLogCount(state, count){
    state.logCount = count
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
