export default {
  namespaced: true,
  state: {
    notification: {
      open: false,
      msg: ""
    }
  },
  mutations: {
    openNotification(state) {
      state.notification.open = true;
    },
    closeNotification(state) {
      state.notification.open = false;
    },
    setNotificationMsg(state, payload) {
      state.notification.msg = payload;
    }
  },
  getters: {
    notification(state) {
      return state.notification;
    }
  }
};
