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
      >2</div>
    </div>
  </div> 
</template>

<script>
export default {
  props: ["step"]
};
</script>


<style lang="scss" scoped>
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
    width: 3rem;
    height: 3rem;
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
}
</style>
