<template>
  <form @submit.prevent="onSubmit" class="form">
    <div class="form__control">
      <label class="form__label" for="cig-count">How many daily cigarettes did you smoke?</label>
      <input v-model="cigsPerDay" type="number" class="form__input" id="cig-count">
    </div>
    <div class="form__control">
      <label class="form__label" for="pack-count">How many cigarettes were in a pack?</label>
      <input v-model="cigsInPack" type="number" class="form__input" id="pack-count">
    </div>
    <div class="form__control">
      <label class="form__label" for="pack-price">What was the price of a pack?</label>
      <input v-model="packCost" type="number" class="form__input" id="pack-price">
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
      cigsPerDay: "",
      cigsInPack: "",
      packCost: "",
      quitDate: DateTime.local().toISO()
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("saveSettings", {
        cigsPerDay: Number(this.cigsPerDay),
        cigsInPack: Number(this.cigsInPack),
        packCost: Number(this.packCost),
        quitDate: DateTime.fromISO(this.quitDate)
      });
      this.$router.push("/");
    },
    populateFormFields() {
      const { cigsPerDay, cigsPerPack, packCost, quitDate } = this.$store.state;
      this.cigsPerDay = cigsPerDay;
      this.cigsInPack = cigsPerPack;
      this.packCost = packCost;
      this.quitDate = quitDate.toISO();
    }
  },
  mounted() {
    if (this.$store.getters.settingsSet) this.populateFormFields();
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
