<template>
  <form @submit.prevent="$emit('submit')" autocomplete="off" class="form">
    <slot/>
  </form>
</template>

<style lang="scss" scoped>
.form {
  display: grid;
  grid-gap: 1rem;
  justify-items: center;

  & > * {
    width: 100%;
    max-width: 60rem;
  }
}
</style>
