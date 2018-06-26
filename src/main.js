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

store.dispatch("trackTime");

const settings = JSON.parse(localStorage.getItem("settings"));
const user = JSON.parse(localStorage.getItem("user"));
if (settings) store.dispatch("saveSettings", settings);
if (user) store.dispatch("user/setUser", user);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
