import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Settings from "./views/Settings.vue";
import Setup from "./views/Setup.vue";
import store from "./store";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/settings",
      name: "settings",
      component: Settings
    },
    {
      path: "/setup",
      name: "setup",
      component: Setup
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.name === "setup") {
    next();
  } else {
    store.getters["core/settingsSet"] ? next() : next("/setup");
  }
});

export default router;
