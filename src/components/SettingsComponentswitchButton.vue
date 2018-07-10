<template>
  <button
    @click="$emit('click', position)"
    :class="{
      'component-switch__btn': true,
      'component-switch__btn--hoverable': value !== position,
    }"
  >
    <component
      :is="icon"
      :class="{
        'component-switch__icon': true,
        'component-switch__icon--active': value === position,
      }"
    />
  </button>
</template>

<script>
import IconEqualizer from "@/assets/svg/equalizer.svg";
import IconUser from "@/assets/svg/user.svg";
import IconCloudUpload from "@/assets/svg/cloud_upload.svg";

export default {
  props: ["value", "position", "icon"],
  components: {
    IconEqualizer,
    IconUser,
    IconCloudUpload
  }
};
</script>

<style lang="scss" scoped>
.component-switch__btn {
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

.component-switch__icon {
  height: 2.5rem;
  width: 2.5rem;
  z-index: 2;
  fill: $color-grey-light-2;
  transition: all 0.3s;

  &--active {
    fill: $color-primary;
  }
}
</style>
