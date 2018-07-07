import { storeProfile } from "@/localStorage";

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
    }
  },
  getters: {
    profile({ username, filename, fileSrc }) {
      return { username, filename, fileSrc };
    }
  }
};
