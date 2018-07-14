<template>
  <form @submit.prevent="$emit('submit')" autocomplete="off" class="form">
    <slot/>
  </form>
</template>

<style lang="scss" scoped>
.form {
  display: grid;
  grid-gap: 1rem;
}
</style>
