import Vue from "vue";
import Vuex from "vuex";
import core from "./core";
import profile from "./profile";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { core, profile }
});
