<template>
  <div class="home">
    <nav class="nav">
      <div class="nav__brand">Quiter!</div>
      <div class="nav__btn"></div>
    </nav>
    <main class="main"></main>
  </div>
</template>

<style lang="scss" scoped>
.home {
  height: 100%;
  display: grid;
  grid-template-rows: 8rem 1fr;
}

.nav {
  background-color: blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  color: #fff;

  &__brand {
    font-size: 2.5rem;
    text-transform: uppercase;
  }
}

.main {
  background-color: #ccc;
  padding: 2rem;
}
</style>
