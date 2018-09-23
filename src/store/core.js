import { DateTime, Settings } from "luxon";
Settings.defaultLocale = "en";
import { storeSettings, getToken } from "@/localStorage";

export default {
  namespaced: true,
  state: {
    quitDate: DateTime.local().toISO(),
    cigsPerDay: null,
    cigsInPack: null,
    packCost: null,
    currentTime: DateTime.local()
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
      storeSettings(payload);
      commit("setCigsCount", payload.cigsPerDay);
      commit("setPackCount", payload.cigsInPack);
      commit("setPackCost", payload.packCost);
      commit("setQuitDate", payload.quitDate);
    },
    async updateSettings({ commit }, payload) {
      const token = getToken();

      if (token) {
        try {
          const res = await fetch(
            `${process.env.VUE_APP_API_ROOT}/users/me/settings`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                "x-auth-token": token
              },
              body: JSON.stringify(payload)
            }
          );

          const data = await res.json();

          if (res.status < 200 || res.status >= 300) {
            throw new Error(data.msg);
          }
        } catch (e) {
          commit("ui/setNotificationMsg", e.message, { root: true });
          commit("ui/openNotification", null, { root: true });
        }
      }
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
    },
    settings({ quitDate, cigsPerDay, cigsInPack, packCost }) {
      return { quitDate, cigsPerDay, cigsInPack, packCost };
    }
  }
};
