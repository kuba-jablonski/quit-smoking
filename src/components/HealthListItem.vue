<template>
  <li class="list-item">
    <radial-progress-bar
      :diameter="65"
      :stroke-width="5"
      :completed-steps="calculatePercentage"
      :total-steps="100"
      :animate-speed="3000"
      :start-color="color"
      :stop-color="color"
      inner-stroke-color="#BDBDBD"
    >
      <span :style="{color: color}">{{ calculatePercentage }}%</span>
    </radial-progress-bar>
    <p class="ml-sm">
      {{ item.description }}
    </p>
  </li>
</template>

<script>
import RadialProgressBar from "vue-radial-progress";

export default {
  components: {
    RadialProgressBar
  },
  props: ["item"],
  computed: {
    calculatePercentage() {
      const diffNow = this.$store.state.core.currentTime.diff(
        this.$store.getters["core/quitDateObject"]
      );

      const percent =
        (
          diffNow.as("milliseconds") / this.item.duration.as("milliseconds")
        ).toFixed(2) * 100;

      return percent < 100 ? percent : 100;
    },
    color() {
      return this.calculatePercentage < 100 ? "#F44336" : "#1E88E5";
    }
  }
};
</script>

<style lang="scss" scoped>
.list-item {
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 1rem;
  line-height: 1.2;
  font-weight: 600;
}
</style>
