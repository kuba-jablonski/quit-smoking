<template>
  <transition name="slide-half">

    <base-layout v-if="settingsSet">
        <div class="home-content">
          <router-link class="router-link" tag="div" :to="{ path: '/settings', query: { component: 2 } }">
            <home-user/>
          </router-link>
          <router-link class="router-link" tag="div" :to="{ path: '/settings', query: { component: 1 } }">
            <home-info/>
          </router-link>
          <router-link class="router-link" tag="div" to="/health">
            <home-health/>
          </router-link>
        </div>
      <home-author slot="footer"/>
    </base-layout>

    <div v-else class="welcome">
      <h1 class="h1">QuitBuddy!</h1>
      <p class="mb-hg uppercase bold">Makes quitting easier</p>
      <base-button color="primary-inverted" raised @click="$router.push('/setup')">Get started</base-button>
    </div>

  </transition>
</template>

<script>
import HomeUser from "@/components/HomeUser";
import HomeInfo from "@/components/HomeInfo";
import HomeHealth from "@/components/HomeHealth";
import SettingsIcon from "@/assets/svg/settings.svg";
import HomeAuthor from "@/components/HomeAuthor";

export default {
  components: {
    HomeUser,
    HomeInfo,
    SettingsIcon,
    HomeHealth,
    HomeAuthor
  },
  computed: {
    settingsSet() {
      return this.$store.getters["core/settingsSet"];
    }
  }
};
</script>


<style lang="scss" scoped>
.welcome {
  background-color: $color-primary;
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.home-content {
  display: grid;
  grid-auto-rows: min-content;
  grid-gap: 1rem;
}

.router-link {
  cursor: pointer;
}
</style>
