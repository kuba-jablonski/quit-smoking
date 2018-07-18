<template functional>
  <div class="container">
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 1140px;
  margin: 0 auto;

  @media screen and (max-width: 1140px) {
    width: 100%;
  }
}
</style>
