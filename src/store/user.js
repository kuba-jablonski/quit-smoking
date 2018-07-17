import {
  storeToken,
  getToken,
  storeId,
  removeIdAndToken
} from "@/localStorage";
import { isEqual } from "lodash";

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

    async fetchUser({ commit, dispatch, rootGetters }) {
      const token = getToken();

      if (token) {
        const res = await fetch(`${process.env.VUE_APP_API_ROOT}/users/me`, {
          headers: {
            "x-auth-token": token
          }
        });

        const data = await res.json();

        if (res.status >= 200 && res.status < 300) {
          const settingsChanged = !isEqual(
            rootGetters["core/settings"],
            data.settings
          );
          const profileChanged = !isEqual(
            rootGetters["profile/profile"],
            data.profile
          );

          if (settingsChanged || profileChanged) {
            // update local data
            commit("setId", data._id);
            storeId(data._id);
            dispatch("core/saveSettings", data.settings, { root: true });
            dispatch("profile/setProfile", data.profile, { root: true });
            commit("ui/setNotificationMsg", "Updated with server data.", {
              root: true
            });
            commit("ui/openNotification", null, { root: true });
          }
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
