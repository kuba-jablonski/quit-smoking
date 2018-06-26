<template>
  <transition name="slide">
    <div class="settings">
      <nav class="nav">
        <router-link to="/" class="nav__btn">
          <arrow-back class="nav__icon"/>
          Settings
        </router-link>
      </nav>
      <settings-componentswitch v-model="currentComponent"/>
      <main class="main">
        <component
          :is="currentComponent"
          @onSubmitSettings="saveSettings($event)"
        />
      </main>
      <base-modal :open="modal.open">
        <p class="mb-hg">{{ modal.text }}</p>
        <base-button class="mr-md" color="green" @click.native="modal.onConfirm">Yes</base-button>
        <base-button color="red" @click.native="modal.open = false">No</base-button>
      </base-modal>
    </div>
  </transition>
</template>

<script>
import ArrowBack from "@/assets/svg/arrow_back.svg";
import FormSettings from "@/components/FormSettings";
import FormUser from "@/components/FormUser";
import BaseModal from "@/components/Base/BaseModal";
import BaseButton from "@/components/Base/BaseButton";

import SettingsComponentswitch from "@/components/SettingsComponentswitch";

export default {
  components: {
    ArrowBack,
    FormSettings,
    FormUser,
    BaseModal,
    BaseButton,
    SettingsComponentswitch
  },
  data() {
    return {
      modal: {
        open: false,
        text: "",
        onConfirm: null
      },
      currentComponent: "FormSettings"
    };
  },
  methods: {
    saveSettings(settings) {
      this.modal.open = true;
      this.modal.text = "Are you are you want to change your settings?";
      this.modal.onConfirm = () => {
        this.$store.dispatch("saveSettings", settings);
        this.modal.open = false;
        setTimeout(() => {
          this.$router.push("/");
        }, 300);
      };
    }
  }
};
</script>


<style lang="scss" scoped>
.settings {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 8rem 5rem 1fr;
  position: absolute;
  z-index: 1;
  background-color: $color-grey-light-1;
}

.nav {
  display: flex;
  align-items: center;
  background-color: $color-primary;
  color: #fff;
  padding: 0 1rem;

  &__btn {
    display: flex;
    font-size: 2rem;
    text-decoration: none;
    color: #fff;
  }

  &__icon {
    display: flex;
    align-items: center;
    height: 2.5rem;
    width: 2.5rem;
    margin-right: 1rem;
    fill: #fff;
  }
}

.main {
  padding: 1rem;
}
</style>
