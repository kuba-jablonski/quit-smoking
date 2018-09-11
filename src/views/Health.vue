<template>
  <transition name="slide">
    <base-layout>
      <health-list/>
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
