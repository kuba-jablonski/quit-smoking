import Vue from "vue";
import Vuex from "vuex";
import moment from "moment";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    quitDate: moment().subtract(5, "hours"),
    cigsPerDay: 20,
    cigsPerPack: 20,
    costPerPack: 15,
    currentTime: null
  },
  mutations: {
    setCurrentTime(state, time) {
      state.currentTime = time;
    }
  },
  actions: {
    trackTime({ commit }) {
      commit("setCurrentTime", moment());
      setInterval(() => {
        commit("setCurrentTime", moment());
      }, 1000);
    }
  },
  getters: {
    costPerCig(state) {
      const cost = state.costPerPack / state.cigsPerPack;
      return cost.toFixed(2);
    },
    daysWithout(state) {
      return state.quitDate.from(state.currentTime);
    },
    cigsNotSmoked(state) {
      const cigInterval = (24 * 60 * 60 * 1000) / state.cigsPerDay;
      const timeDiff =
        moment(state.currentTime).valueOf() - moment(state.quitDate).valueOf();
      return Math.floor(timeDiff / cigInterval);
    }
  }
});
