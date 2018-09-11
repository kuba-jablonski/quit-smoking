<template>
  <div class="page">
    <slot name="header">
      <base-nav/>
    </slot>
    <main class="main">
      <base-container>
        <div class="content">
          <slot/>
        </div>
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
  background-color: $color-grey-light-1;
}

.main {
  overflow-y: auto;
  overflow-x: hidden;
}

.content {
  padding: 1rem;
}
</style>
