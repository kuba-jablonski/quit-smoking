<template>
  <div class="card">
    <health-list-item :item="item"/>
  </div>
</template>

<script>
import HealthListItem from "@/components/HealthListItem";

export default {
  components: {
    HealthListItem
  },
  beforeCreate() {
    this.item = this.$store.getters["health/items"].find(item => {
      const diffNow = this.$store.state.core.currentTime.diff(
        this.$store.getters["core/quitDateObject"]
      );

      return item.duration.as("milliseconds") - diffNow.as("milliseconds") > 0;
    });
  }
};
</script>


<style lang="scss" scoped>
// .card {
//   background-color: #fff;
//   display: flex;
//   align-items: center;
//   padding: 1rem;
//   line-height: 1.2;
//   font-weight: 600;
// }
</style>
