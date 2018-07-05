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
          >
            <template slot="form-user-buttons">
              <base-button @click.native="step--" class="mr-auto">Back</base-button>
              <base-button @click.native="step++" class="mr-md">Skip</base-button>
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

export default {
  components: {
    FormSettings,
    SetupCongrats,
    SetupStepper,
    FormProfile
  },
  data() {
    return {
      step: 1
    };
  },
  computed: {
    currentComponent() {
      switch (this.step) {
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
      try {
        localStorage.setItem("profile", JSON.stringify(profile));
      } catch (e) {
        console.log("Error!", e);
      } finally {
        this.$store.dispatch("profile/setProfile", profile);
        this.step++;
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
