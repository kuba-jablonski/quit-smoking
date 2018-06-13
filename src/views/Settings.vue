<template>
<transition name="slide">
  <div class="settings">
    <nav class="nav">
      <router-link to="/" class="nav__btn">
        <arrow-back class="nav__icon"/>
        Settings
      </router-link>
    </nav>
    <main class="main">
      <datetime type="datetime" :week-start="1" v-model="datetime"></datetime>
    </main>
  </div>
</transition>
</template>

<script>
import ArrowBack from "@/assets/svg/arrow_back.svg";
import { DateTime } from "luxon";

export default {
  components: {
    ArrowBack
  },
  data() {
    return {
      datetime: DateTime.local().toISO()
    };
  }
};
</script>


<style lang="scss" scoped>
.settings {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 8rem 1fr;
  position: absolute;
  z-index: 1;
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

.slide-enter-active {
  transition: transform 0.3s ease-out;
}
.slide-leave-active {
  transition: transform 0.3s ease-out;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
