<template>
  <transition name="slide">
    <div class="setup">
      <stepper :step="step"/>
      <main class="main">
        <transition name="slide-right-left" mode="out-in">
          <component :is="currentComponent"  @onSubmit="saveSettings($event)"/>
        </transition>
      </main>
    </div>
  </transition>
</template>

<script>
import TheForm from "@/components/Settings/TheForm";
import Congrats from "@/components/Setup/Congrats";
import Stepper from "@/components/Setup/Stepper";

export default {
  components: {
    TheForm,
    Congrats,
    Stepper
  },
  data() {
    return {
      currentComponent: "TheForm",
      step: 1
    };
  },
  methods: {
    saveSettings(settings) {
      this.$store.dispatch("saveSettings", settings);
      this.currentComponent = "Congrats";
      this.step++;
    }
  }
};
</script>


<style lang="scss" scoped>
.setup {
  width: 100%;
  height: 100%;
  background-color: $color-primary;
  position: absolute;
  z-index: 1;
}

.main {
  padding: 1rem;
}
</style>
