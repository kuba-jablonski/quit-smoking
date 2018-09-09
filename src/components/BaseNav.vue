<template>
  <nav class="nav">
    <base-container>
      <div class="nav__items" v-if="$route.name === 'home'">
        <div class="nav__brand">QuitBuddy!</div>
        <router-link :to="{ path: '/settings', query: { component: 3 } }">
          <settings-icon class="nav__icon"/>
        </router-link>
      </div>
      <div v-else class="nav__items">
        <router-link to="/" class="nav__btn">
          <arrow-back class="nav__icon"/>
          {{ $route.name }}
        </router-link>
      </div>
    </base-container>
  </nav>
</template>

<script>
import ArrowBack from "@/assets/svg/arrow_back.svg";
import SettingsIcon from "@/assets/svg/settings.svg";

export default {
  components: {
    ArrowBack,
    SettingsIcon
  }
};
</script>


<style lang="scss" scoped>
.nav {
  background-color: $color-primary;
  padding: 0 1rem;
  color: #fff;
  height: 5rem;
  width: 100%;

  &__items {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__brand {
    font-family: $font-display;
    font-size: 2.5rem;
  }

  &__btn {
    display: flex;
    align-items: center;
    font-size: 2rem;
    text-decoration: none;
    color: #fff;
    text-transform: capitalize;

    & > *:first-child {
      margin-right: 1rem;
    }
  }

  &__icon {
    display: flex;
    align-items: center;
    height: 2.5rem;
    width: 2.5rem;
    fill: #fff;
  }
}
</style>
