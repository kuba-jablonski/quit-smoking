<template functional>
  <nav class="nav">
    <slot/>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  background-color: $color-primary;
  padding: 0 1rem;
  color: #fff;
  height: 5rem;
}
</style>
