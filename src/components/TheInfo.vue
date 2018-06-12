<template>
  <div class="card">
    <div class="info__row">
      <p class="title info__title">Quit smoking:</p>
      <div class="info__data">{{ timeWithout }}</div>
    </div>
    <div class="info__row">
      <p class="title info__title">Papierosy niezapalone:</p>
      <div class="info__data">35</div>
    </div>
    <div class="info__row">
      <p class="title info__title">Pieniądze zaoszczędzone:</p>
      <div class="info__data">26,25 PLN</div>
    </div>
    <div class="info__row">
      <p class="title info__title">Czas odzyskany:</p>
      <div class="info__data">03:30</div>
    </div> 
  </div>
</template>

<script>
export default {
  computed: {
    timeWithout() {
      return this.$store.getters.daysWithout;
    }
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
