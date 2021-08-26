import { createStore } from "vuex";

export default createStore({
  state: {
    oneIdUserCount: 1361613,
    oneIdUserCountToday: 241,
  },
  getters: {
    getFemaleUsers(state) {
      return Math.round((state.oneIdUserCount / 100) * 32);
    },
    getMaleUsers(state, { getFemaleUsers }) {
      return Math.round(state.oneIdUserCount - getFemaleUsers);
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
