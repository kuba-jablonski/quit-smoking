<template>
  <nav class="nav">
    <div class="nav__main">
      <base-container>
        <div class="nav__items">
          <div v-if="$route.name === 'home'" class="nav__brand">QuitBuddy!</div>
          <router-link v-if="$route.name === 'home'" :to="{ path: '/settings', query: { component: 3 } }">
            <settings-icon class="nav__icon"/>
          </router-link>
          <router-link v-if="$route.name !== 'home'" to="/" class="nav__btn">
            <arrow-back class="nav__icon"/>
            {{ $route.name }}
          </router-link>
        </div>
      </base-container>
    </div>
    <div v-if="extended" class="nav__extension">
      <base-container>
        <slot/>
      </base-container>
    </div>
  </nav>
</template>

<script>
import ArrowBack from "@/assets/svg/arrow_back.svg";
import SettingsIcon from "@/assets/svg/settings.svg";

export default {
  components: {
    ArrowBack,
    SettingsIcon
  },
  props: {
    extended: {
      type: Boolean,
      default: false
    }
  }
};
</script>


<style lang="scss" scoped>
.nav {
  color: #fff;
  width: 100%;

  &__main {
    background-color: $color-primary;
  }

  &__items {
    padding: 0 1rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5rem;
  }

  &__extension {
    height: 5rem;
    background-color: $color-grey-light-1;
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
