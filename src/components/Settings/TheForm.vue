<template>
  <form @submit.prevent="onSubmit" class="form">
    <div class="form__control">
      <label class="form__label" for="cig-count">How many daily cigarettes did you smoke?</label>
      <input v-model="cigCount" type="number" class="form__input" id="cig-count">
    </div>
    <div class="form__control">
      <label class="form__label" for="pack-count">How many cigarettes were in a pack?</label>
      <input v-model="packCount" type="number" class="form__input" id="pack-count">
    </div>
    <div class="form__control">
      <label class="form__label" for="pack-price">What was the price of a pack?</label>
      <input v-model="packPrice" type="number" class="form__input" id="pack-price">
    </div>
    <div class="form__control">
      <label class="form__label">When did you quit smoking?</label>
      <datetime type="datetime" :week-start="1" v-model="quitDate"></datetime>
    </div>
    <button type="submit" class="form__btn">Save</button> 
  </form>
</template>

<script>
import { DateTime } from "luxon";

export default {
  data() {
    return {
      cigCount: "",
      packCount: "",
      packPrice: "",
      quitDate: DateTime.local().toISO()
    };
  },
  methods: {
    onSubmit() {
      console.log(DateTime.fromISO(this.quitDate));
      this.$store.dispatch("saveSettings", {
        cigCount: Number(this.cigCount),
        packCount: Number(this.packCount),
        packCost: Number(this.packPrice),
        quitDate: DateTime.fromISO(this.quitDate)
      });
    }
  }
};
</script>



<style lang="scss" scoped>
.form {
  display: grid;
  grid-gap: 1rem;

  &__control {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  &__label {
    background-color: $color-font;
    color: #fff;
    font-size: 1.4rem;
    padding: 0.5rem;
  }

  &__input {
    text-align: inherit;
    padding: 0.5rem;
    font-size: 1.6rem;
    font-weight: 600;
    color: $color-primary;
    border: none;
    outline: none;
  }

  &__btn {
    padding: 1rem;
    font-size: 1.6rem;
    background-color: $color-secondary;
    color: #fff;
    border: none;
    outline: none;
  }
}
</style>

<style lang="scss">
.vdatetime {
  margin: 0;
  padding: 0;
}

.vdatetime-input {
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  margin: 0;
  padding: 0.5rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: $color-primary;
  text-align: inherit;
}
</style>
