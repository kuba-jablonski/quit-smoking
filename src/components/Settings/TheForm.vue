<template>
  <form @submit.prevent="onSubmit" class="form">
    <base-input v-model.number="cigsPerDay" id="cig-count" required min="1" type="number" max="100">
      How many daily cigarettes did you smoke?
    </base-input>
    <base-input v-model.number="cigsInPack" type="number" min="1" max="100" required id="pack-count">
      How many cigarettes were in a pack?
    </base-input>
    <base-input v-model.number="packCost" type="number" min="0" max="100" required step="0.01" id="pack-price">
      What was the price of a pack?
    </base-input>
    <div class="form__control">
      <label class="form__label">When did you quit smoking?</label>
      <datetime type="datetime" :week-start="1" v-model="quitDate"></datetime>
    </div>
    <base-button class="mt-md" type="submit" color="green" fullWidth>Save</base-button>
  </form>
</template>

<script>
import BaseButton from "@/components/Base/BaseButton";
import BaseInput from "@/components/Base/BaseInput";
import { DateTime } from "luxon";

export default {
  components: {
    BaseButton,
    BaseInput
  },
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
      this.$emit("onSubmit", {
        cigsPerDay: this.cigsPerDay,
        cigsInPack: this.cigsInPack,
        packCost: this.packCost,
        quitDate: this.quitDate
      });
    },
    populateFormFields() {
      const { cigsPerDay, cigsInPack, packCost, quitDate } = this.$store.state;
      this.cigsPerDay = cigsPerDay;
      this.cigsInPack = cigsInPack;
      this.packCost = packCost;
      this.quitDate = quitDate;
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

.vdatetime-popup {
  text-align: left;
}
</style>
