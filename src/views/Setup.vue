<template>
  <transition name="slide">
    <div class="setup">
      <div class="stepper">
        <div
          :class="{
            'stepper__tab': true,
            'stepper__tab--active': step === 1,
            'stepper__tab--complete': step > 1
          }"
        >
          <div
            :class="{
              'stepper__icon': true,
              'stepper__icon--active': step === 1,
              'stepper__icon--complete': step > 1
            }"
          >1</div>
        </div>
        <div
          :class="{
            'stepper__tab': true,
            'stepper__tab--active': step === 2,
            'stepper__tab--complete': step > 2
          }"
        >
          <div
            :class="{
              'stepper__icon': true,
              'stepper__icon--active': step === 2,
              'stepper__icon--complete': step > 2
            }"
          >1</div>
        </div>
      </div>
      <component :is="currentComponent"  @onSubmit="saveSettings($event)"/>
    </div>
  </transition>
</template>

<script>
import TheForm from "@/components/Settings/TheForm";
import Congrats from "@/components/Setup/Congrats";

export default {
  components: {
    TheForm,
    Congrats
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

.stepper {
  background-color: orangered;
  display: flex;
  height: 5rem;

  &__tab {
    flex: 1 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &::before {
      position: absolute;
      left: 0;
      content: "";
      width: 50%;
      height: 2px;
      display: block;
      background-color: #fff;
    }

    &::after {
      position: absolute;
      right: 0;
      content: "";
      width: 50%;
      height: 2px;
      display: block;
      background-color: #fff;
    }

    &--complete {
      &::before {
        background-color: $color-green;
      }

      &::after {
        background-color: $color-green;
      }
    }

    &--active {
      &::before {
        background-color: $color-green;
      }
    }
  }

  &__icon {
    background-color: #fff;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;

    &--complete {
      background-color: $color-green;
    }

    &--active {
      border: 2px solid $color-green;
    }
  }
}
</style>
