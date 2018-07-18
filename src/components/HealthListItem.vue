<template>
  <base-card>
    <div class="health-item">
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
      <p class="ml-md">
        {{ item.description }}
      </p>
    </div>
  </base-card>
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

      const percent = Math.floor(
        (diffNow.as("milliseconds") / this.item.duration.as("milliseconds")) *
          100
      );

      return percent < 100 ? percent : 100;
    },
    color() {
      return this.calculatePercentage < 100 ? "#F44336" : "#1E88E5";
    }
  }
};
</script>

<style lang="scss" scoped>
.health-item {
  background-color: #fff;
  display: grid;
  grid-template-columns: min-content 1fr;
  align-items: center;
  line-height: 1.2;
  font-weight: 600;
}
</style>
