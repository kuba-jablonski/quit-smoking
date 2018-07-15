<template>
  <base-card>
    <health-list-item :item="item"/>
  </base-card>
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
