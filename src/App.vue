<template>
  <div id="app">
    <router-view/>
    <base-notification v-if="notification.open" @close="$store.commit('ui/closeNotification')">
      {{ notification.msg }}
    </base-notification>
    <base-modal :open="modal.open">
      <p class="mb-hg">Found a difference between local and server data. Choose which you want to use.</p>
      <base-button class="mr-md" color="green" @click.native="modal.useServerData">Use server data</base-button>
      <base-button color="red" @click.native="modal.useLocalData">Use local data</base-button>
    </base-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modal: {
        open: false,
        useServerData: null,
        useLocalData: null
      }
    };
  },
  computed: {
    notification() {
      return this.$store.getters["ui/notification"];
    }
  },
  async mounted() {
    const callbacks = await this.$store.dispatch("user/compareUserData");
    if (callbacks) {
      this.modal.open = true;
      this.modal.useServerData = () => {
        callbacks.useServerData();
        this.modal.open = false;
      };
      this.modal.useLocalData = () => {
        callbacks.useLocalData();
        this.modal.open = false;
      };
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
