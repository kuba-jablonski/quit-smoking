<template>
  <nav class="component-switch">
    <settings-componentswitch-button
      @click="$emit('valueChange', $event)"
      :value="value"
      :position="1"
      icon="icon-equalizer"
    />
    <settings-componentswitch-button
      @click="$emit('valueChange', $event)"
      :value="value"
      :position="2"
      icon="icon-user"
    />
    <settings-componentswitch-button
      @click="$emit('valueChange', $event)"
      :value="value"
      :position="3"
      icon="icon-cloud-upload"
    />
  </nav>
</template>

<script>
import SettingsComponentswitchButton from "@/components/SettingsComponentswitchButton";

export default {
  components: {
    SettingsComponentswitchButton
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
