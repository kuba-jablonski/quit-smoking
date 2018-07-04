<template>
  <nav class="component-switch">
    <button
      @click="$emit('valueChange', 1)"
      :class="{
        'component-switch__btn': true,
        'component-switch__btn--hoverable': value !== 1,
      }"
    >
      <icon-equalizer
        :class="{
          'component-switch__icon': true,
          'component-switch__icon--active': value === 1,
        }"
      />
    </button>
    <button
      @click="$emit('valueChange', 2)"
      :class="{
        'component-switch__btn': true,
        'component-switch__btn--hoverable': value !== 2,
      }"
    >
      <icon-user
        :class="{
          'component-switch__icon': true,
          'component-switch__icon--active': value === 2,
        }"        
      />
    </button>
    <button
      @click="$emit('valueChange', 3)"
      :class="{
        'component-switch__btn': true,
        'component-switch__btn--hoverable': value !== 3,
      }"
    >
      <icon-user
        :class="{
          'component-switch__icon': true,
          'component-switch__icon--active': value === 3,
        }"        
      />
    </button>
  </nav>
</template>

<script>
import IconEqualizer from "@/assets/svg/equalizer.svg";
import IconUser from "@/assets/svg/user.svg";

export default {
  components: {
    IconEqualizer,
    IconUser
  },
  props: ["value"]
};
</script>


<style lang="scss" scoped>
.component-switch {
  display: flex;

  &__btn {
    flex: 1 1;
    border-top: none;
    border-bottom: 1px solid $color-grey-light-2;
    outline: none;
    cursor: pointer;

    &:not(:last-child) {
      border-left: none;
      border-right: 1px solid $color-grey-light-2;
    }

    &:last-child {
      border-right: none;
      border-left: none;
    }

    &--hoverable {
      &:hover,
      &:active {
        .component-switch__icon {
          fill: lighten($color-primary, 25%);
        }
      }
    }
  }

  &__icon {
    height: 2.5rem;
    width: 2.5rem;
    z-index: 2;
    fill: $color-grey-light-2;
    transition: all 0.3s;

    &--active {
      fill: $color-primary;
    }
  }
}
</style>
