<template>
  <div class="author">
    <p class="author__text">Created by Jakub Jabłoński</p>
    <div class="social">
      <a href="#" class="social__link">
        <settings-icon class="social__icon"/>
      </a>
      <a href="#" class="social__link">
        <settings-icon class="social__icon"/>
      </a>
      <a href="#" class="social__link">
        <settings-icon class="social__icon"/>
      </a>
    </div>
  </div>
</template>

<script>
import SettingsIcon from "@/assets/svg/settings.svg";

export default {
  components: {
    SettingsIcon
  }
};
</script>


<style lang="scss" scoped>
.author {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  &__text {
    margin-bottom: 0.5rem;
    font-size: 2rem;
    color: $color-grey-light-2;
  }
}

.social {
  display: flex;

  &__link {
    &:not(:last-child) {
      margin-right: 4rem;
    }
  }

  &__icon {
    height: 4rem;
    width: 4rem;
    fill: $color-grey-light-2;
  }
}
</style>
