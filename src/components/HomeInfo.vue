<template>
  <base-card v-if="hasQuit">
    <div class="info__row">
      <p class="title info__title">Quit smoking:</p>
      <div class="info__data">{{ timeWithoutSmoking | dateObjectToString }}</div>
    </div>
    <div class="info__row">
      <p class="title info__title">Cigarettes avioded:</p>
      <div class="info__data">{{ cigsNotSmoked }}</div>
    </div>
    <div class="info__row">
      <p class="title info__title">Money saved:</p>
      <div class="info__data">{{ moneySaved }} PLN</div>
    </div>
  </base-card>
  <base-card v-else class="card">
    <div class="info__row">
      <p class="title info__title">Quitting in:</p>
      <div class="info__data">{{ timeWithoutSmoking | dateObjectToString }}</div>
    </div>
    <p>Good luck!</p>
  </base-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("core", [
      "timeWithoutSmoking",
      "cigsNotSmoked",
      "moneySaved"
    ]),
    hasQuit() {
      return this.timeWithoutSmoking.minutes >= 0;
    }
  },
  filters: {
    dateObjectToString({ days, hours, minutes }) {
      const dateString = days ? `${days}d,` : "";
      const timeString = `${padWithZeros(Math.abs(hours))}:${padWithZeros(
        Math.floor(Math.abs(minutes))
      )}`;

      return `${dateString} ${timeString}`;

      function padWithZeros(value) {
        if (!value) return "00";
        return value < 10 ? "0" + value : value;
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.info {
  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:not(:first-of-type) {
      padding-top: 1rem;
    }

    &:not(:last-of-type) {
      padding-bottom: 1rem;
      border-bottom: 1px solid $color-grey-light-2;
    }
  }

  &__data {
    font-weight: 600;
    color: $color-primary;
    font-size: 2rem;
  }
}
</style>
