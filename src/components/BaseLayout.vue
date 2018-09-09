<template>
  <div class="page">
    <base-nav/>
    <main class="main">
      <base-container>
        <slot/>
      </base-container>
    </main>
    <slot name="footer"/>
  </div>
</template>

<style lang="scss" scoped>
.page {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  position: absolute;
  overflow: hidden;
  // margin-top: 5rem;
  // z-index: 1;
  background-color: $color-grey-light-1;
}

.main {
  padding: 1rem;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
