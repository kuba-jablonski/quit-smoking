<template>
  <ul>
    <health-list-item v-for="item in items" :key="item.description" :item="item" />
  </ul>
</template>

<script>
import HealthListItem from "@/components/HealthListItem";

export default {
  components: {
    HealthListItem
  },
  computed: {
    items() {
      return this.$store.getters["health/items"];
    }
  }
};
</script>
