import Vue from "vue";
import Vuex from "vuex";
import core from "./core";
import user from "./user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { core, user }
});
