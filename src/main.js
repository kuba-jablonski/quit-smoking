import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import Datetime from "vue-datetime";
import "vue-datetime/dist/vue-datetime.css";
import "@/components/_globals";

Vue.use(Datetime);

Vue.config.productionTip = false;

store.dispatch("core/trackTime");

const settings = JSON.parse(localStorage.getItem("settings"));
const profile = JSON.parse(localStorage.getItem("profile"));
if (settings) store.dispatch("core/saveSettings", settings);
if (profile) store.dispatch("profile/setProfile", profile);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
