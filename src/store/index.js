import { createStore } from "vuex";

export default createStore({
  state: {
    oneIdUserCount: 1361613,
    oneIdUserCountToday: 241,
    allApps: 33900000,
    lastUpdateValue: 0,

    allUsers: 0,
    lastupdateUserValue: 0,
  },
  getters: {
    getFemaleUsers(state) {
      return Math.round((state.oneIdUserCount / 100) * 32);
    },
    getMaleUsers(state, { getFemaleUsers }) {
      return Math.round(state.oneIdUserCount - getFemaleUsers);
    },
  },
  mutations: {
    SET_ALL_APPS(state, value) {
      state.lastUpdateValue = value;
      state.allApps += value;
    },
    SET_ALL_USERS(state, value) {
      state.lastupdateUserValue = value;
      state.allApps += value;
    },
  },
  actions: {},
  modules: {},
});
