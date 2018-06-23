<template>
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
      >
        <icon-equalizer 
          :class="{
            'stepper__svg': true,
            'stepper__svg--active': step === 1,
            'stepper__svg--complete': step > 1
          }"
        />
      </div>
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
      >
        <icon-user 
          :class="{
            'stepper__svg': true,
            'stepper__svg--active': step === 2,
            'stepper__svg--complete': step > 2
          }"
        />      
      </div>
    </div>
  </div> 
</template>

<script>
import IconEqualizer from "@/assets/svg/equalizer.svg";
import IconUser from "@/assets/svg/user.svg";

export default {
  components: {
    IconEqualizer,
    IconUser
  },
  props: ["step"]
};
</script>


<style lang="scss" scoped>
.stepper {
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
      transition: all 0.3s;
    }

    &::after {
      position: absolute;
      right: 0;
      content: "";
      width: 50%;
      height: 2px;
      display: block;
      background-color: #fff;
      transition: all 0.3s;
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
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
    transition: all 0.3s;

    &--complete {
      background-color: $color-green;
    }

    &--active {
      border: 2px solid $color-green;
    }
  }

  &__svg {
    display: block;
    height: 2.2rem;
    width: 2.2rem;
    fill: $color-font;
    z-index: 2;
    transition: all 0.3s;

    &--complete {
      fill: #fff;
    }

    &--active {
      fill: $color-green;
    }
  }
}
</style>
