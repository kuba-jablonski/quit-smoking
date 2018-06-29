<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "css/base";
@import "css/typography";
@import "css/utilities";
@import "css/animations";

#app {
  min-height: 100vh;
  width: 100vw;
  position: relative;
  overflow-x: hidden;
}
</style>
