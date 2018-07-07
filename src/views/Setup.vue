<template>
  <transition name="slide">
    <div class="setup">
      <setup-stepper :step="step"/>
      <main class="main">
        <transition name="slide-right-left" mode="out-in">
          <component
            :is="currentComponent" 
            @onSubmitSettings="saveSettings($event)"
            @onSubmitUser="saveProfile($event)"
            @onSubmitLogin="login($event)"
            :register-possible="false"
          >
            <template slot="form-user-buttons">
              <base-button @click.native="step--" class="mr-auto">Back</base-button>
              <base-button @click.native="step++" class="mr-md">Skip</base-button>
              <base-button type="submit" color="primary">Save</base-button>
            </template>
            <template slot="form-settings-buttons">
              <base-button @click.native="step--" class="mr-auto">Import</base-button>
              <base-button type="submit" color="primary">Save</base-button>
            </template>
            <template slot="form-register-buttons">
              <base-button @click.native="step++" class="mr-auto">Import</base-button>
              <base-button type="submit" color="primary">Save</base-button>
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
    login(credentials) {
      this.$store.dispatch("user/login", credentials);
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
