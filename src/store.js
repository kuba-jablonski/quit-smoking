import Vue from "vue";
import Vuex from "vuex";
import { DateTime, Settings } from "luxon";

Settings.defaultLocale = "en";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    quitDate: DateTime.local(),
    cigsPerDay: null,
    cigsPerPack: null,
    costPerPack: null,
    currentTime: null
  },
  mutations: {
    setCurrentTime(state, time) {
      state.currentTime = time;
    },
    setCigsCount(state, payload) {
      state.cigsPerDay = payload;
    },
    setPackCount: (state, payload) => {
      state.cigsPerPack = payload;
    },
    setPackCost: (state, payload) => {
      state.costPerPack = payload;
    },
    setQuitDate: (state, payload) => {
      state.quitDate = payload;
    }
  },
  actions: {
    trackTime({ commit }) {
      commit("setCurrentTime", DateTime.local());
      setInterval(() => {
        commit("setCurrentTime", DateTime.local());
      }, 1000);
    },
    saveSettings({ commit, state }, payload) {
      console.log(payload);
      commit("setCigsCount", payload.cigCount);
      commit("setPackCount", payload.packCount);
      commit("setPackCost", payload.packCost);
      commit("setQuitDate", payload.quitDate);
      console.log(state.cigsPerDay);
    }
  },
  getters: {
    costPerCig({ costPerPack, cigsPerPack }) {
      console.log(costPerPack, cigsPerPack);
      const cost = costPerPack / cigsPerPack;
      return cost.toFixed(2);
    },
    timeWithoutSmoking({ quitDate, currentTime }) {
      return currentTime
        .diff(quitDate, ["days", "hours", "minutes"])
        .toObject();
    },
    cigsNotSmoked({ cigsPerDay, currentTime, quitDate }) {
      const cigInterval = (24 * 60 * 60 * 1000) / cigsPerDay;
      const timeDiff = currentTime.toMillis() - quitDate.toMillis();
      return Math.floor(timeDiff / cigInterval);
    },
    moneySaved(state, { costPerCig, cigsNotSmoked }) {
      console.log(costPerCig, cigsNotSmoked);
      return cigsNotSmoked * costPerCig;
    },
    settingsSet({ quitDate, cigsPerDay, cigsPerPack, costPerPack }) {
      return quitDate && cigsPerDay && cigsPerPack && costPerPack;
    }
  }
});
