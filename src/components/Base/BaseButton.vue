<template>
  <button type="button" class="btn">
    <slot/>
  </button>
</template>

<style lang="scss">
.btn {
  font-family: $font-base;
  font-size: 1.4rem;
  font-weight: 600;
  display: inline-block;
  height: 3.6rem;
  min-width: 8.8rem;
  padding: 0.6rem 1.6rem;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  user-select: none;
  border: 0;
  border-radius: 2px;
  transition: all 0.2s;
  // background: $md-btn-color;
  color: #fff;
  outline: 0;
  &:focus {
    // background: darken($md-btn-color, 12%)
  }
}
</style>
