<template>
  <base-card :style="{ padding: 0, paddingRight: '1rem' }" v-if="username">
    <div class="user">
      <div v-if="fileSrc" class="user__image">
        <img :style="imageRotationStyle" :src="fileSrc" alt="">
      </div>
      <div class="user__text">
        <p class="title">Keep it up {{ username }}!</p>
        <p>You are smoke free since {{ quitDate }}.</p>
      </div>
    </div> 
  </base-card>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("profile", ["username", "fileSrc", "rotation"]),
    imageRotationStyle() {
      return {
        transform: `rotate(${this.rotation}deg)`
      };
    },
    quitDate() {
      return this.$store.getters["core/quitDateObject"].toLocaleString({
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    }
  }
};
</script>


<style lang="scss" scoped>
.user {
  display: flex;
  height: 8rem;
}

.user__image {
  flex: 0 0 8rem;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

.user__text {
  flex: 1 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;
}
</style>
