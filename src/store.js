import Vue from "vue";
import Vuex from "vuex";
import { DateTime, Settings } from "luxon";

Settings.defaultLocale = "en";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    quitDate: DateTime.local().toISO(),
    cigsPerDay: null,
    cigsInPack: null,
    packCost: null,
    currentTime: null
  },
  mutations: {
    setCurrentTime(state, time) {
      state.currentTime = time;
    },
    setCigsCount(state, payload) {
      state.cigsPerDay = payload;
    },
    setPackCount(state, payload) {
      state.cigsInPack = payload;
    },
    setPackCost(state, payload) {
      state.packCost = payload;
    },
    setQuitDate(state, payload) {
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
    saveSettings({ commit }, payload) {
      localStorage.setItem("settings", JSON.stringify(payload));
      commit("setCigsCount", payload.cigsPerDay);
      commit("setPackCount", payload.cigsInPack);
      commit("setPackCost", payload.packCost);
      commit("setQuitDate", payload.quitDate);
    }
  },
  getters: {
    quitDateObject({ quitDate }) {
      return DateTime.fromISO(quitDate);
    },
    costPerCig({ packCost, cigsInPack }) {
      const cost = packCost / cigsInPack;
      return cost.toFixed(2);
    },
    timeWithoutSmoking({ currentTime }, { quitDateObject }) {
      return currentTime
        .diff(quitDateObject, ["days", "hours", "minutes"])
        .toObject();
    },
    cigsNotSmoked({ cigsPerDay, currentTime }, { quitDateObject }) {
      const cigInterval = (24 * 60 * 60 * 1000) / cigsPerDay;
      const timeDiff = currentTime.toMillis() - quitDateObject.toMillis();
      return Math.floor(timeDiff / cigInterval);
    },
    moneySaved(state, { costPerCig, cigsNotSmoked }) {
      return (cigsNotSmoked * costPerCig).toFixed(2);
    },
    settingsSet({ quitDate, cigsPerDay, cigsInPack, packCost }) {
      return !!quitDate && !!cigsPerDay && !!cigsInPack && !!packCost;
    }
  }
});
