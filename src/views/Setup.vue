<template>
  <transition name="slide">
    <div class="setup">
      <stepper :step="step"/>
      <main class="main">
        <transition name="slide-right-left" mode="out-in">
          <component :is="currentComponent"  @onSubmit="saveSettings($event)" @onSubmitUser="saveUser($event)"/>
        </transition>
      </main>
    </div>
  </transition>
</template>

<script>
import TheForm from "@/components/Settings/TheForm";
import Congrats from "@/components/Setup/Congrats";
import Stepper from "@/components/Setup/Stepper";
import TheUser from "@/components/Setup/TheUser";

export default {
  components: {
    TheForm,
    Congrats,
    Stepper,
    TheUser
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
          return "TheForm";
        case 2:
          return "TheUser";
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
    saveUser() {
      this.step++;
    }
  }
};
</script>


<style lang="scss" scoped>
.setup {
  width: 100%;
  height: 100%;
  background-color: $color-grey-light-1;
  position: absolute;
  z-index: 1;
}

.main {
  padding: 1rem;
}
</style>
