<template>
  <div class="form-input">
    <label class="label" :for="id">
      <slot/>
    </label>
    <input v-bind="$attrs" class="input" :id="id" :value="value" @input="$emit('input', $event.target.value)">
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
}
</style>
