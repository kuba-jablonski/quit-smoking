import { storeProfile, getToken } from "@/localStorage";

export default {
  namespaced: true,
  state: {
    username: null,
    filename: null,
    fileSrc: null,
    rotation: null
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
    },
    setRotation(state, payload) {
      state.rotation = payload;
    }
  },
  actions: {
    setProfile({ commit }, profile) {
      storeProfile(profile);
      commit("setUsername", profile.username);
      commit("setFilename", profile.filename);
      commit("setFileSrc", profile.fileSrc);
      commit("setRotation", profile.rotation);
    },
    async updateProfile({ commit }, payload) {
      const token = getToken();

      if (token) {
        try {
          const res = await fetch(
            `${process.env.VUE_APP_API_ROOT}/users/me/profile`,
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
    profile({ username, filename, fileSrc, rotation }) {
      return { username, filename, fileSrc, rotation };
    }
  }
};
