<template>
  <div class="card">
    <div class="user__image">
      <img :src="fileSrc" alt="">
    </div>
    <div class="user__text">
      <p class="title">Keep it up {{ username }}!</p>
      <p>You are smoke free since {{ quitDate }}.</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("user", ["username", "fileSrc"]),
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
.card {
  background-color: #fff;
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
  padding: 1rem;
}
</style>
