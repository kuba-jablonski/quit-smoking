<template>
  <div class="settings">
    <nav class="nav">
      <router-link to="/" class="nav__btn">
        <arrow-back class="nav__icon"/>
        Settings
      </router-link>
    </nav>
    <main class="main">

    </main>
  </div>
</template>

<script>
import ArrowBack from "@/assets/svg/arrow_back.svg";

export default {
  components: {
    ArrowBack
  }
};
</script>


<style lang="scss" scoped>
.settings {
  height: 100%;
  display: grid;
  grid-template-rows: 8rem 1fr;
}

.nav {
  display: flex;
  align-items: center;
  background-color: $color-primary;
  color: #fff;
  padding: 0 1rem;

  &__btn {
    display: flex;
    font-size: 2rem;
    text-decoration: none;
    color: #fff;
  }

  &__icon {
    display: flex;
    align-items: center;
    height: 2.5rem;
    width: 2.5rem;
    margin-right: 1rem;
    fill: #fff;
  }
}

.main {
  background-color: $color-grey-light-1;
  padding: 1rem;
}
</style>
