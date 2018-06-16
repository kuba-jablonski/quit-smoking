<template>
  <div v-if="open" class="background">
    <div class="modal">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: ["open"]
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
