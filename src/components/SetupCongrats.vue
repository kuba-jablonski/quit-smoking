<template>
  <div class="congrats">
    <radial-progress-bar
      :diameter="diameter"
      :completed-steps="completedSteps"
      :total-steps="totalSteps"
      :animate-speed="3000"
      start-color="#1E88E5"
      stop-color="#1E88E5"
      inner-stroke-color="#BDBDBD"
    >
      <p class="c-primary bold">Congratulations!</p>
      <p>You are now a non-smoker.</p>
    </radial-progress-bar>

  </div>
</template>

<script>
import RadialProgressBar from "vue-radial-progress";

export default {
  components: {
    RadialProgressBar
  },
  data() {
    return {
      totalSteps: 1,
      completedSteps: 0,
      diameter: window.innerWidth * 0.8
    };
  },
  mounted() {
    setTimeout(() => {
      this.completedSteps = 1;
    }, 100);
    setTimeout(() => {
      this.$router.push("/");
    }, 3500);
  }
};
</script>

<style lang="scss" scoped>
.congrats {
  display: flex;
  justify-content: center;
}
</style>
