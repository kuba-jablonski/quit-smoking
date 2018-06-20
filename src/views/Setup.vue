<template>
  <transition name="slide">
    <div class="setup">
      <p>Please fill out the form to get started.</p>
      <the-form  @onSubmit="saveSettings($event)"/>
    </div>
  </transition>
</template>

<script>
import TheForm from "@/components/Settings/TheForm";

export default {
  components: {
    TheForm
  },
  methods: {
    saveSettings(settings) {
      this.$store.dispatch("saveSettings", settings);
      this.$router.push("/");
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
}
</style>
