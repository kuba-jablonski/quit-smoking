<template>
  <transition name="slide">
    <base-layout>
      <!-- <base-nav/> -->
      <base-container>
        <main class="main">
          <health-list/>
        </main>
      </base-container>
    </base-layout>
  </transition>
</template>

<script>
import HealthList from "@/components/HealthList";

export default {
  components: {
    HealthList
  }
};
</script>


<style lang="scss" scoped>
.main {
  padding: 1rem;
}
</style>
