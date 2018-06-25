<template>
  <transition name="slide">
    <div class="setup">
      <stepper :step="step"/>
      <main class="main">
        <transition name="slide-right-left" mode="out-in">
          <component
            :is="currentComponent" 
            @onSubmit="saveSettings($event)"
            @onSubmitUser="saveUser($event)"
            @back="step--"
            @skip="step++"
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
import BaseButton from "@/components/Base/BaseButton";
import FormSettings from "@/components/FormSettings";
import Congrats from "@/components/Setup/Congrats";
import Stepper from "@/components/Setup/Stepper";
import FormUser from "@/components/FormUser";

export default {
  components: {
    BaseButton,
    FormSettings,
    Congrats,
    Stepper,
    FormUser
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
          return "FormUser";
        case 3:
          return "Congrats";
      }
    }
  },
  methods: {
    saveSettings(settings) {
      this.$store.dispatch("saveSettings", settings);
      this.step++;
    },
    saveUser(user) {
      try {
        localStorage.setItem("user", JSON.stringify(user));
      } catch (e) {
        console.log("Error!", e);
      } finally {
        this.$store.dispatch("user/setUser", user);
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
