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
  height: 5rem;
}
</style>
