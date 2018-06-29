<template>
  <base-form @submit="onSubmit">
    <base-input v-model.number="cigsPerDay" id="cig-count" required min="1" type="number" max="100">
      How many daily cigarettes did you smoke?
    </base-input>
    <base-input v-model.number="cigsInPack" type="number" min="1" max="100" required id="pack-count">
      How many cigarettes were in a pack?
    </base-input>
    <base-input v-model.number="packCost" type="number" min="0" max="100" required step="0.01" id="pack-price">
      What was the price of a pack?
    </base-input>
    <base-input>
      When did you quit smoking?
      <datetime slot="control" type="datetime" :week-start="1" v-model="quitDate"></datetime>
    </base-input>
    <div class="d-flex mt-md">
      <slot name="form-settings-buttons">
        <base-button class="form-btn" type="submit" color="primary" fullWidth>Save</base-button>
      </slot>
    </div>
  </base-form>
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
      this.$emit("onSubmitSettings", {
        cigsPerDay: this.cigsPerDay,
        cigsInPack: this.cigsInPack,
        packCost: this.packCost,
        quitDate: this.quitDate
      });
    },
    populateFormFields() {
      const {
        cigsPerDay,
        cigsInPack,
        packCost,
        quitDate
      } = this.$store.state.core;
      this.cigsPerDay = cigsPerDay;
      this.cigsInPack = cigsInPack;
      this.packCost = packCost;
      this.quitDate = quitDate;
    }
  },
  mounted() {
    if (this.$store.getters["core/settingsSet"]) this.populateFormFields();
  }
};
</script>
