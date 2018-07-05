<template>
  <transition name="slide">
    <div class="settings">
      <nav class="nav">
        <router-link to="/" class="nav__btn">
          <arrow-back class="nav__icon"/>
          Settings
        </router-link>
      </nav>
      <settings-componentswitch :value="switchValue" @valueChange="onValueChange"/>
      <main class="main">
        <transition :name="transitionName" mode="out-in">
          <component
            :is="currentComponent"
            @onSubmitSettings="saveSettings($event)"
            @onSubmitUser="saveProfile($event)"
          />
        </transition>
      </main>
      <base-modal :open="modal.open">
        <p class="mb-hg">{{ modal.text }}</p>
        <base-button class="mr-md" color="green" @click.native="modal.onConfirm">Yes</base-button>
        <base-button color="red" @click.native="modal.open = false">No</base-button>
      </base-modal>
    </div>
  </transition>
</template>

<script>
import ArrowBack from "@/assets/svg/arrow_back.svg";
import FormSettings from "@/components/FormSettings";
import FormProfile from "@/components/FormProfile";
import FormLogin from "@/components/FormLogin";
import SettingsComponentswitch from "@/components/SettingsComponentswitch";

export default {
  components: {
    ArrowBack,
    FormSettings,
    FormProfile,
    FormLogin,
    SettingsComponentswitch
  },
  data() {
    return {
      modal: {
        open: false,
        text: "",
        onConfirm: null
      },
      switchValue: 1,
      switchPreviousValue: null
    };
  },
  computed: {
    currentComponent() {
      if (this.switchValue === 1) {
        return "FormSettings";
      } else if (this.switchValue === 2) {
        return "FormProfile";
      } else {
        return "FormLogin";
      }
    },
    transitionName() {
      return this.switchValue < this.switchPreviousValue
        ? "slide-left-right"
        : "slide-right-left";
    }
  },
  methods: {
    onValueChange(value) {
      this.switchPreviousValue = this.switchValue;
      this.switchValue = value;
    },
    saveSettings(settings) {
      this.modal.open = true;
      this.modal.text = "Are you sure you want to change your settings?";
      this.modal.onConfirm = () => {
        this.$store.dispatch("core/saveSettings", settings);
        this.modal.open = false;
        setTimeout(() => {
          this.$router.push("/");
        }, 300);
      };
    },
    saveProfile(profile) {
      this.modal.open = true;
      this.modal.text = "Are you sure you want to change your profile info?";
      this.modal.onConfirm = () => {
        try {
          localStorage.setItem("profile", JSON.stringify(profile));
        } catch (e) {
          console.log("Error!", e);
        } finally {
          this.$store.dispatch("profile/setProfile", profile);
          this.modal.open = false;
          setTimeout(() => {
            this.$router.push("/");
          }, 300);
        }
      };
    }
  }
};
</script>


<style lang="scss" scoped>
.settings {
  min-height: 100%;
  min-width: 100%;
  display: grid;
  grid-template-rows: 5rem 5rem 1fr;
  position: absolute;
  z-index: 1;
  background-color: $color-grey-light-1;
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
  padding: 1rem;
}
</style>
