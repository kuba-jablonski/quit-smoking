<template>
  <button :type="type" :class="btnClasses" v-on="$listeners">
    <slot/>
  </button>
</template>

<script>
export default {
  props: {
    fullWidth: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "button"
    },
    color: {
      type: String
    },
    raised: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      btnClasses: {
        btn: true,
        "btn--fullwidth": this.fullWidth,
        "btn--primary": this.color === "primary",
        "btn--green": this.color === "green",
        "btn--red": this.color === "red",
        "btn--primary-inverted": this.color === "primary-inverted",
        "btn--raised": this.raised
      }
    };
  }
};
</script>


<style lang="scss" scoped>
@mixin btnColor($color) {
  color: $color;
  background-color: lighten($color, 33%);

  &:focus,
  &:hover {
    background-color: lighten($color, 25%);
  }
}

.btn {
  position: relative;
  font-family: $font-base;
  font-size: 1.6rem;
  font-weight: 600;
  display: inline-block;
  height: 3.6rem;
  min-width: 12rem;
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
  transition: all 0.3s;
  color: #fff;
  background-color: $color-grey-light-2;
  outline: 0;

  &--fullwidth {
    width: 100%;
  }

  &--primary {
    @include btnColor($color-primary);
  }

  &--primary-inverted {
    background-color: #fff;
    color: $color-primary;
  }

  &--green {
    @include btnColor($color-green);
  }

  &--red {
    @include btnColor($color-red);
  }

  &--raised {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
}
</style>
