import { storeProfile, getToken } from "@/localStorage";

export default {
  namespaced: true,
  state: {
    username: null,
    filename: null,
    fileSrc: null
  },
  mutations: {
    setUsername(state, payload) {
      state.username = payload;
    },
    setFilename(state, payload) {
      state.filename = payload;
    },
    setFileSrc(state, payload) {
      state.fileSrc = payload;
    }
  },
  actions: {
    setProfile({ commit }, profile) {
      storeProfile(profile);
      commit("setUsername", profile.username);
      commit("setFilename", profile.filename);
      commit("setFileSrc", profile.fileSrc);
    },
    async updateProfile({ dispatch }, payload) {
      const res = await fetch(
        `${process.env.VUE_APP_API_ROOT}/users/me/profile`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": getToken()
          },
          body: JSON.stringify(payload)
        }
      );

      const data = await res.json();

      if (res.status >= 200 && res.status < 300) {
        dispatch("setProfile", data);
      } else {
        throw new Error(data.msg);
      }
    }
  },
  getters: {
    profile({ username, filename, fileSrc }) {
      return { username, filename, fileSrc };
    }
  }
};
