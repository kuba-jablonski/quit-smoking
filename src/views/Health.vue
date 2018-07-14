<template>
  <transition name="slide">
    <div class="health">
      <nav class="nav">
        <router-link to="/" class="nav__btn">
          <arrow-back class="nav__icon"/>
          Health
        </router-link>
      </nav>
      <health-list />
    </div>
  </transition>
</template>

<script>
import ArrowBack from "@/assets/svg/arrow_back.svg";
import HealthList from "@/components/HealthList";

export default {
  components: {
    ArrowBack,
    HealthList
  }
};
</script>


<style lang="scss" scoped>
.health {
  min-height: 100%;
  min-width: 100%;
  display: grid;
  grid-template-rows: 5rem 1fr;
  position: absolute;
  z-index: 1;
  background-color: $color-grey-light-1;
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
</style>
