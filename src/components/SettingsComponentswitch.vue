<template>
  <nav class="component-switch">
    <button
      @click="$emit('input', 'FormSettings')"
      :class="{
        'component-switch__btn': true,
        'component-switch__btn--hoverable': value !== 'FormSettings',
      }"
    >
      <icon-equalizer
        :class="{
          'component-switch__icon': true,
          'component-switch__icon--active': value === 'FormSettings',
        }"
      />
    </button>
    <button
      @click="$emit('input', 'FormUser')"
      :class="{
        'component-switch__btn': true,
        'component-switch__btn--hoverable': value !== 'FormUser',
      }"
    >
      <icon-user
        :class="{
          'component-switch__icon': true,
          'component-switch__icon--active': value === 'FormUser',
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

    &:first-child {
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
