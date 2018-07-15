<template>
  <div id="app">
    <router-view/>
    <base-notification v-if="notification.open" @close="$store.commit('ui/closeNotification')">
      {{ notification.msg }}
    </base-notification>
  </div>
</template>

<script>
export default {
  computed: {
    notification() {
      return this.$store.getters["ui/notification"];
    }
  }
};
</script>


<style lang="scss">
@import "css/base";
@import "css/typography";
@import "css/utilities";
@import "css/animations";

#app {
  min-height: 100vh;
  width: 100vw;
  position: relative;
  overflow-x: hidden;
}
</style>
