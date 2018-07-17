<template>
  <transition name="slide-half">
    <div class="home">
      <nav class="nav">
        <div class="nav__brand">Quiter!</div>
        <router-link :to="{ path: '/settings', query: { component: 3 } }">
          <settings-icon class="nav__btn"/>
        </router-link>
      </nav>
      <main class="main">
        <router-link class="router-link" tag="div" :to="{ path: '/settings', query: { component: 2 } }">
          <home-user/>
        </router-link>
        <router-link class="router-link" tag="div" :to="{ path: '/settings', query: { component: 1 } }">
          <home-info/>
        </router-link>
        <router-link class="router-link" tag="div" to="/health">
          <home-health/>
        </router-link>
      </main>
    </div>
  </transition>
</template>

<script>
import HomeUser from "@/components/HomeUser";
import HomeInfo from "@/components/HomeInfo";
import HomeHealth from "@/components/HomeHealth";
import SettingsIcon from "@/assets/svg/settings.svg";

export default {
  components: {
    HomeUser,
    HomeInfo,
    SettingsIcon,
    HomeHealth
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
  background-color: $color-grey-light-1;
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
  display: grid;
  grid-auto-rows: min-content;
  grid-gap: 1rem;
  padding: 1rem;
}

.router-link {
  cursor: pointer;
}
</style>
