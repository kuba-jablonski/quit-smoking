<template>
  <ul>
    <health-list-item v-for="item in items" :key="item.description" :item="item" />
  </ul>
</template>

<script>
import HealthListItem from "@/components/HealthListItem";
import { Duration } from "luxon";

export default {
  components: {
    HealthListItem
  },
  data() {
    return {
      items: [
        {
          description:
            "Your blood pressure, pulse rate and the temperature of your hands and feet are beginning to return to normal",
          duration: Duration.fromObject({ days: 1 })
        }
        // {
        //   description: 'Remaining nicotine in your bloodstream has fallen to less than half of normal peak daily levels',
        //   time: this.calculateTime()
        // }
      ]
    };
  }
};
</script>
