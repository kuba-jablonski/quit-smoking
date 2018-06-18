<template>
  <transition
    :css="false"
    @enter="enter"
    @leave="leave"
  >
    <div v-if="open" class="background">
      <div ref="modal" :style="initialModalStyle" class="modal">
        <slot/>
      </div>
    </div>
  </transition>
</template>

<script>
import Velocity from "velocity-animate";

export default {
  props: ["open"],
  data() {
    return {
      initialModalStyle: {
        transform: "scale(.3)",
        opacity: 0
      }
    };
  },
  methods: {
    enter(el, done) {
      Velocity(el, { opacity: [1, 0] }, { duration: 200 });
      Velocity(
        this.$refs.modal,
        { opacity: [1, 0], scaleX: [1, 0.3], scaleY: [1, 0.3] },
        { duration: 200, delay: 100, complete: done }
      );
    },
    leave(el, done) {
      Velocity(
        this.$refs.modal,
        { opacity: [0, 1], scaleX: [0.3, 1], scaleY: [0.3, 1] },
        { duration: 200 }
      );
      Velocity(
        el,
        { opacity: [0, 1] },
        { duration: 200, delay: 100, complete: done }
      );
    }
  }
};
</script>


<style lang="scss" scoped>
.background {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(#000, 0.8);
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.modal {
  background-color: #fff;
  padding: 2rem 3rem;
}
</style>
