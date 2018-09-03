<template>
  <div class="form-input">
    <label class="label" :for="id">
      <slot/>
    </label>
    <slot name="control">
      <input v-bind="$attrs" class="input" :id="id" :value="value" @input="$emit('input', $event.target.value)">
    </slot>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: ["value", "id"]
};
</script>


<style lang="scss" scoped>
.form-input {
  display: flex;
  flex-direction: column;
  text-align: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.label {
  background-color: $color-font;
  color: #fff;
  font-size: 1.4rem;
  padding: 0.5rem;
}

.input {
  text-align: inherit;
  padding: 0.5rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: $color-primary;
  border: none;
  outline: none;
  box-shadow: none;
  width: 100%;
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

  &__header {
    background-color: $color-primary;
  }

  &__actions {
    &__button {
      &--cancel,
      &--confirm {
        color: $color-primary;
      }
    }
  }
}

.vdatetime-calendar__month__day--selected > span > span {
  background-color: $color-primary;
}

.vdatetime-time-picker__item--selected {
  color: $color-primary;
}
</style>
