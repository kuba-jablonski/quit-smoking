<template functional>
  <img :src="props.fileSrc" :style="{ transform: `rotate(${props.rotation}deg)` }">
</template>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
