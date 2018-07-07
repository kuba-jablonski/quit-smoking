<template>
<div>
  <transition name="fade" mode="out-in">
    <div key="login" v-if="isLogin">
      <p class="title mb-md text-center uppercase">Login</p>
      <base-form @submit="login">
        <base-input v-model="email" id="email" required type="email">
          Email
        </base-input>
        <base-input v-model="password" required id="password">
          Password
        </base-input>
        <div class="d-flex mt-md">
          <slot name="form-settings-buttons">
            <base-button class="form-btn" type="submit" color="primary" fullWidth>Save</base-button>
          </slot>
        </div>
      </base-form>
      <div @click="isLogin = false" class="register-link">
        <p>Don't have an account?</p>
        <p class="title link">Register now.</p>
      </div>
    </div>
    <div key="register" v-else>
      <p class="title mb-md text-center uppercase">Register</p>
      <base-form @submit="register">
        <base-input v-model="email" id="email" required type="email">
          Email
        </base-input>
        <base-input v-model="password" required id="password">
          Password
        </base-input>
        <div class="d-flex mt-md">
          <slot name="form-settings-buttons">
            <base-button class="form-btn" type="submit" color="primary" fullWidth>Save</base-button>
          </slot>
        </div>
      </base-form>
      <div @click="isLogin = true" class="register-link">
        <p>Already have an account?</p>
        <p class="title link">Login now.</p>
      </div>
    </div>
  </transition>
</div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      isLogin: true
    };
  },
  methods: {
    register() {
      this.$store.dispatch("user/register", {
        email: this.email,
        password: this.password
      });
    },
    login() {
      this.$store.dispatch("user/login", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>


<style lang="scss" scoped>
.register-link {
  margin-top: 3rem;
  text-align: center;
  cursor: pointer;
}
</style>
