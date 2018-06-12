import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import Datetime from "vue-datetime";
import "vue-datetime/dist/vue-datetime.css";

Vue.use(Datetime);

Vue.config.productionTip = false;

store.dispatch("trackTime");

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
