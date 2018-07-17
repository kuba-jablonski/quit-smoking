import {
  storeToken,
  getToken,
  storeId,
  removeIdAndToken
} from "@/localStorage";

export default {
  namespaced: true,
  state: {
    _id: null
  },
  mutations: {
    setId(state, id) {
      state._id = id;
    }
  },
  actions: {
    async register({ commit, dispatch, rootGetters }, payload) {
      const res = await fetch(`${process.env.VUE_APP_API_ROOT}/users/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          settings: rootGetters["core/settings"],
          profile: rootGetters["profile/profile"]
        })
      });

      const data = await res.json();

      if (res.status >= 200 && res.status < 300) {
        const token = res.headers.get("x-auth-token");
        storeToken(token);
        commit("setId", data._id);
        dispatch("core/saveSettings", data.settings, { root: true });
        dispatch("profile/setProfile", data.profile, { root: true });
      } else {
        throw new Error(data.msg);
      }
    },

    async login({ commit, dispatch }, payload) {
      const res = await fetch(`${process.env.VUE_APP_API_ROOT}/auth/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: payload.email,
          password: payload.password
        })
      });

      const data = await res.json();

      if (res.status >= 200 && res.status < 300) {
        const token = res.headers.get("x-auth-token");
        storeToken(token);
        commit("setId", data._id);
        storeId(data._id);
        dispatch("core/saveSettings", data.settings, { root: true });
        dispatch("profile/setProfile", data.profile, { root: true });
      } else {
        throw new Error(data.msg);
      }
    },

    async fetchUser({ commit, dispatch }) {
      const token = getToken();

      if (token) {
        const res = await fetch(`${process.env.VUE_APP_API_ROOT}/users/me`, {
          headers: {
            "x-auth-token": token
          }
        });

        const data = await res.json();

        if (res.status >= 200 && res.status < 300) {
          commit("setId", data._id);
          storeId(data._id);
          dispatch("core/saveSettings", data.settings, { root: true });
          dispatch("profile/setProfile", data.profile, { root: true });
        }
      }
    },

    logout({ commit }) {
      removeIdAndToken();
      commit("setId", null);
    }
  },

  getters: {
    isAuthenticated(state) {
      return !!state._id;
    }
  }
};
