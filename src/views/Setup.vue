<template>
  <transition name="slide">
    <div class="setup">
      <setup-stepper :step="step"/>
      <main class="main">
        <transition :name="transitionName" mode="out-in">
          <component
            :is="currentComponent" 
            @onSubmitSettings="saveSettings($event)"
            @onSubmitUser="saveProfile($event)"
            @onSubmitLogin="login($event)"
            :register-possible="false"
          >
            <template slot="form-user-buttons">
              <base-button @click.native="previousStep = step; step--" class="mr-auto">Back</base-button>
              <base-button @click.native="previousStep = step; step++" class="mr-md">Skip</base-button>
              <base-button type="submit" color="primary">Save</base-button>
            </template>
            <template slot="form-settings-buttons">
              <base-button @click.native="previousStep = step; step--" class="mr-auto">Import</base-button>
              <base-button type="submit" color="primary">Save</base-button>
            </template>
            <template slot="form-login-buttons">
              <base-button @click.native="previousStep = step; step++" class="mr-auto">Back</base-button>
              <base-button type="submit" color="primary">Submit</base-button>
            </template>
          </component>
        </transition>
      </main>
    </div>
  </transition>
</template>

<script>
import FormSettings from "@/components/FormSettings";
import SetupCongrats from "@/components/SetupCongrats";
import SetupStepper from "@/components/SetupStepper";
import FormProfile from "@/components/FormProfile";
import FormLogin from "@/components/FormLogin";

export default {
  components: {
    FormSettings,
    SetupCongrats,
    SetupStepper,
    FormProfile,
    FormLogin
  },
  data() {
    return {
      previousStep: 1,
      step: 1
    };
  },
  computed: {
    currentComponent() {
      switch (this.step) {
        case 0:
          return "FormLogin";
        case 1:
          return "FormSettings";
        case 2:
          return "FormProfile";
        case 3:
          return "SetupCongrats";
      }
    },
    transitionName() {
      return this.step < this.previousStep
        ? "slide-left-right"
        : "slide-right-left";
    }
  },
  methods: {
    saveSettings(settings) {
      this.$store.dispatch("core/saveSettings", settings);
      this.step++;
    },
    saveProfile(profile) {
      this.$store.dispatch("profile/setProfile", profile);
      this.step++;
    },
    async login(credentials) {
      try {
        await this.$store.dispatch("user/login", credentials);
        this.$router.push("/");
      } catch (e) {
        this.$store.commit("ui/setNotificationMsg", e.message);
        this.$store.commit("ui/openNotification");
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.setup {
  min-width: 100%;
  min-height: 100%;
  background-color: $color-grey-light-1;
  position: absolute;
  z-index: 1;
}

.main {
  padding: 1rem;
}
</style>
