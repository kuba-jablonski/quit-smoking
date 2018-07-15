<template>
  <ul class="list">
    <li class="list__item" v-for="item in items" :key="item.description">
      <health-list-item :item="item" />
    </li>
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

<style lang="scss" scoped>
.list {
  padding: 1rem 0;
  background-color: #fff;
  display: grid;
  grid-gap: 1rem;
  font-size: 1.4rem;
  &__item {
    padding: 0 1rem;
  }
}
</style>
