<template>
  <div class="author">
    <p class="author__text">Created by Jakub Jabłoński</p>
    <div class="social">
      <a href="https://jakub-jablonski.surge.sh" target="_blank" class="social__link">
        <earth-icon class="social__icon"/>
      </a>
      <a href="https://github.com/kuba-jablonski" target="_blank" class="social__link">
        <github-icon class="social__icon"/>
      </a>
      <a href="https://linkedin.com/in/jakub-jabłoński-47a990138/" target="_blank" class="social__link">
        <linkedin-icon class="social__icon"/>
      </a>
    </div>
  </div>
</template>

<script>
import EarthIcon from "@/assets/svg/earth.svg";
import GithubIcon from "@/assets/svg/github.svg";
import LinkedinIcon from "@/assets/svg/linkedin.svg";

export default {
  components: {
    EarthIcon,
    GithubIcon,
    LinkedinIcon
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
    font-size: 1.8rem;
    color: $color-grey-light-2;
    border-bottom: 1px solid currentColor;
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
