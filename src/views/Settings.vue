<template>
<transition name="slide">
  <div class="settings">
    <nav class="nav">
      <router-link to="/" class="nav__btn">
        <arrow-back class="nav__icon"/>
        Settings
      </router-link>
    </nav>
    <main class="main">
      <the-form @onSubmit="saveSettings($event)"/>
      <the-modal :open="modal.open">
        <p class="p">{{ modal.text }}</p>
        <base-button class="btn--confirm" @click.native="modal.onConfirm">Yes</base-button>
        <base-button class="btn--deny" @click.native="modal.open = false">No</base-button>
      </the-modal>
    </main>
  </div>
</transition>
</template>

<script>
import ArrowBack from "@/assets/svg/arrow_back.svg";
import TheForm from "@/components/Settings/TheForm";
import TheModal from "@/components/Settings/TheModal";
import BaseButton from "@/components/Base/BaseButton";

export default {
  components: {
    ArrowBack,
    TheForm,
    TheModal,
    BaseButton
  },
  data() {
    return {
      modal: {
        open: false,
        text: "",
        onConfirm: null
      }
    };
  },
  methods: {
    saveSettings(settings) {
      this.modal.open = true;
      this.modal.text = "Are you are you want to change your settings?";
      this.modal.onConfirm = () => {
        this.$store.dispatch("saveSettings", settings);
        this.modal.open = false;
        setTimeout(() => {
          this.$router.push("/");
        }, 500);
      };
    }
  }
};
</script>


<style lang="scss" scoped>
.settings {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 8rem 1fr;
  position: absolute;
  z-index: 1;
}

.nav {
  display: flex;
  align-items: center;
  background-color: $color-primary;
  color: #fff;
  padding: 0 1rem;

  &__btn {
    display: flex;
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
  background-color: $color-grey-light-1;
  padding: 1rem;
}

.btn {
  margin-top: 3rem;

  &--confirm {
    margin-right: 1rem;
    color: $color-secondary;
    background-color: lighten($color-secondary, 40%);

    &:hover,
    &:active {
      background-color: lighten($color-secondary, 30%);
    }
  }

  &--deny {
    color: $color-tertiary;
    background-color: lighten($color-tertiary, 33%);

    &:hover,
    &:active {
      background-color: lighten($color-tertiary, 28%);
    }
  }
}

.slide-enter-active {
  transition: transform 0.3s ease-out;
}
.slide-leave-active {
  transition: transform 0.3s ease-out;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
