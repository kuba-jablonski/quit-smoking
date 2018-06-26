<template>
  <transition name="slide-half">
    <div class="home">
      <nav class="nav">
        <div class="nav__brand">Quiter!</div>
        <router-link to="/settings">
          <settings-icon class="nav__btn"/>
        </router-link>
      </nav>
      <main class="main">
        <the-info/>
      </main>
    </div>
  </transition>
</template>

<script>
import TheInfo from "@/components/TheInfo";
import SettingsIcon from "@/assets/svg/settings.svg";

export default {
  components: {
    TheInfo,
    SettingsIcon
  }
};
</script>


<style lang="scss" scoped>
.home {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 5rem 1fr;
  position: absolute;
}

.nav {
  background-color: $color-primary;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  color: #fff;

  &__brand {
    font-family: $font-display;
    font-size: 2.5rem;
    text-transform: uppercase;
  }

  &__btn {
    height: 3rem;
    width: 3rem;
    fill: #fff;
    display: flex;
    align-items: center;
  }
}

.main {
  background-color: $color-grey-light-1;
  padding: 1rem;
}
</style>
