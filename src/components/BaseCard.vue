<template>
  <div class="card">
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background-color: #fff;
  padding: 1rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
</style>
