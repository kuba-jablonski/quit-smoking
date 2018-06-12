<template>
  <div class="card">
    <div class="info__row">
      <p class="title info__title">Quit smoking:</p>
      <div class="info__data">{{ timeWithoutSmoking }}</div>
    </div>
    <div class="info__row">
      <p class="title info__title">Papierosy niezapalone:</p>
      <div class="info__data">{{ cigsNotSmoked }}</div>
    </div>
    <div class="info__row">
      <p class="title info__title">Money saved:</p>
      <div class="info__data">{{ moneySaved }} PLN</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["timeWithoutSmoking", "cigsNotSmoked", "moneySaved"])
  }
};
</script>


<style lang="scss" scoped>
.card {
  background-color: #fff;
  padding: 1rem;
}

.info {
  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:not(:first-child) {
      padding-top: 1rem;
    }

    &:not(:last-child) {
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
