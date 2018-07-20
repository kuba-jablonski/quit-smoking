<template>
  <transition name="slide">
    <div class="health">
      <base-nav>
        <base-container>
          <div class="health-nav">
            <router-link to="/" class="health-nav__btn">
              <arrow-back class="health-nav__icon"/>
              Health
            </router-link>
          </div>
        </base-container>
      </base-nav>
      <base-container>
        <main class="main">
          <health-list/>
        </main>
      </base-container>
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

.health-nav {
  height: 100%;
  display: flex;
  align-items: center;

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
  padding: 1rem;
}
</style>
