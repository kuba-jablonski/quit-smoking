<template>
<div>
  <transition name="fade" mode="out-in">
    <div key="login" v-if="isLogin && !isAuthenticated">
      <p class="title mb-md text-center uppercase">Login</p>
      <base-form @submit="login">
        <base-input v-model="email" id="email" required type="email">
          Email
        </base-input>
        <base-input v-model="password" required minlength="5" maxlength="255" id="password">
          Password
        </base-input>
        <div class="d-flex mt-md">
          <slot name="form-login-buttons">
            <base-button class="form-btn" type="submit" color="primary" fullWidth>Save</base-button>
          </slot>
        </div>
      </base-form>
      <div v-if="registerPossible" @click="isLogin = false" class="register-link">
        <p>Don't have an account?</p>
        <p class="title link">Register now.</p>
      </div>
    </div>
    <div key="logout" v-if="isLogin && isAuthenticated">
      <p class="title mb-md">You are logged in.</p>
      <base-button @click.native="logout">Logout</base-button>
    </div>
    <div key="register" v-if="!isLogin">
      <p class="title mb-md text-center uppercase">Register</p>
      <base-form @submit="register">
        <base-input v-model="email" id="email" required minlength="5" maxlength="255" type="email">
          Email
        </base-input>
        <base-input v-model="password" required id="password">
          Password
        </base-input>
        <div class="d-flex mt-md">
          <slot name="form-register-buttons">
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
  props: {
    registerPossible: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      email: "",
      password: "",
      isLogin: true
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters["user/isAuthenticated"];
    }
  },
  methods: {
    register() {
      this.$emit("onSubmitRegister", {
        email: this.email,
        password: this.password
      });
    },
    login() {
      this.$emit("onSubmitLogin", {
        email: this.email,
        password: this.password
      });
    },
    logout() {
      this.$emit("onLogout");
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
