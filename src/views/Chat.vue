<template>
  <transition name="slide">
    <div class="chat">
      <base-nav>
        <!-- <base-container> -->
          <div class="chat-nav">
            <router-link to="/" class="chat-nav__btn">
              <arrow-back class="chat-nav__icon"/>
              Chat
            </router-link>
          </div>
        <!-- </base-container> -->
      </base-nav>
      <base-container>
        <main class="main">
          <div class="messages">
            bro
          </div>
          <input type="text">
        </main>
      </base-container>
    </div>
  </transition>
</template>

<script>
import ArrowBack from "@/assets/svg/arrow_back.svg";

export default {
  components: {
    ArrowBack
  }
};
</script>


<style lang="scss" scoped>
.chat {
  min-height: 100%;
  min-width: 100%;
  display: grid;
  grid-template-rows: 5rem 1fr;
  position: absolute;
  z-index: 1;
  background-color: $color-grey-light-1;
}

.chat-nav {
  height: 100%;
  display: flex;
  align-items: center;

  &__btn {
    display: flex;
    align-items: center;
    font-size: 2rem;
    text-decoration: none;
    color: #fff;
  }

  &__icon {
    display: flex;
    align-items: center;
    height: 2.5rem;
    width: 2.5rem;
    margin-right: 1rem;
    fill: #fff;
  }
}

.main {
  // padding: 1rem;
  display: grid;
  height: 100%;
  // grid-template-rows: calc(100% - 3rem) 3rem;
}
</style>
