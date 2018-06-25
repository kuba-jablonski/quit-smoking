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
    setUser({ commit }, user) {
      commit("setUsername", user.username);
      commit("setFilename", user.filename);
      commit("setFileSrc", user.fileSrc);
    }
  }
};
