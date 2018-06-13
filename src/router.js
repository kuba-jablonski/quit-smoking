import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Settings from "./views/Settings.vue";
import store from "./store";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      beforeEnter: (to, from, next) =>
        store.getters.settingsSet ? next() : next("/settings")
    },
    {
      path: "/settings",
      name: "settings",
      component: Settings
    }
  ]
});
