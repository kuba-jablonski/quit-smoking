<template>
  <transition name="slide">
    <base-layout>
      <base-nav extended slot="header">
        <settings-componentswitch :value="switchValue" @valueChange="onValueChange"/>
      </base-nav>
        
      <transition :name="transitionName" mode="out-in">
        <component
          :is="currentComponent"
          @onSubmitSettings="saveSettings($event)"
          @onSubmitUser="saveProfile($event)"
          @onSubmitRegister="register($event)"
          @onSubmitLogin="login($event)"
          @onLogout="logout"
        />
      </transition>

      <base-modal :open="modal.open">
        <p class="mb-hg">{{ modal.text }}</p>
        <base-button class="mr-md" color="green" @click="modal.onConfirm">Yes</base-button>
        <base-button color="red" @click="modal.open = false">No</base-button>
      </base-modal>

    </base-layout>
  </transition>
</template>

<script>
import FormSettings from "@/components/FormSettings";
import FormProfile from "@/components/FormProfile";
import FormLogin from "@/components/FormLogin";
import SettingsComponentswitch from "@/components/SettingsComponentswitch";

export default {
  components: {
    FormSettings,
    FormProfile,
    FormLogin,
    SettingsComponentswitch
  },
  data() {
    return {
      modal: {
        open: false,
        text: "",
        onConfirm: null
      },
      switchValue: parseInt(this.$route.query.component) || 1,
      switchPreviousValue: null
    };
  },
  computed: {
    currentComponent() {
      if (this.switchValue === 1) {
        return "FormSettings";
      } else if (this.switchValue === 2) {
        return "FormProfile";
      } else {
        return "FormLogin";
      }
    },
    transitionName() {
      return this.switchValue < this.switchPreviousValue
        ? "slide-left-right"
        : "slide-right-left";
    }
  },
  methods: {
    onValueChange(value) {
      this.switchPreviousValue = this.switchValue;
      this.switchValue = value;
    },
    saveSettings(settings) {
      this.modal.open = true;
      this.modal.text = "Are you sure you want to change your settings?";
      this.modal.onConfirm = () => {
        this.$store.dispatch("core/saveSettings", settings);
        this.$store.dispatch("core/updateSettings", settings);
        this.modal.open = false;
        setTimeout(() => {
          this.$router.push("/");
        }, 300);
      };
    },
    saveProfile(profile) {
      this.modal.open = true;
      this.modal.text = "Are you sure you want to change your profile info?";
      this.modal.onConfirm = () => {
        try {
          this.$store.dispatch("profile/setProfile", profile);
          this.$store.dispatch("profile/updateProfile", profile);
          this.modal.open = false;
          setTimeout(() => {
            this.$router.push("/");
          }, 300);
        } catch (e) {
          if (e.name === "QuotaExceededError") {
            this.$store.commit(
              "ui/setNotificationMsg",
              "Image too large. Please pick another image."
            );
            this.$store.commit("ui/openNotification");
            this.modal.open = false;
          }
        }
      };
    },
    async register(credentials) {
      try {
        await this.$store.dispatch("user/register", credentials);
        this.$router.push("/");
      } catch (e) {
        this.$store.commit("ui/setNotificationMsg", e.message);
        this.$store.commit("ui/openNotification");
      }
    },
    async login(credentials) {
      try {
        await this.$store.dispatch("user/login", credentials);
        this.$router.push("/");
      } catch (e) {
        this.$store.commit("ui/setNotificationMsg", e.message);
        this.$store.commit("ui/openNotification");
      }
    },
    logout() {
      this.$store.dispatch("user/logout");
    }
  }
};
</script>


<style lang="scss" scoped>
.settings {
  min-height: 100%;
  min-width: 100%;
  display: grid;
  grid-template-rows: 5rem 1fr;
  position: absolute;
  z-index: 1;
  background-color: $color-grey-light-1;
}

.settings-nav {
  height: 100%;
  display: flex;
  align-items: center;

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
