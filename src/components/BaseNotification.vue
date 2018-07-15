<template>
  <transition name="slide-in-bottom">
    <div class="notification">
      <p class="c-red text-center bold">
        <slot>This is a notification component.</slot>
      </p>
    </div>
  </transition>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$emit("close");
    }, 5000);
  }
};
</script>


<style lang="scss" scoped>
.notification {
  position: absolute;
  width: calc(100% - 2rem);
  bottom: 2rem;
  background-color: $color-font;
  margin: 0 1rem;
  padding: 1rem;
  z-index: 2;
}

.slide-in-bottom-enter,
.slide-in-bottom-leave-to {
  transform: translateY(100%);
}
.slide-in-bottom-enter-active,
.slide-in-bottom-leave-active {
  transition: transform 0.3s;
}
</style>
