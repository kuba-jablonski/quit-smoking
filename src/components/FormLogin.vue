<template>
  <base-form @submit="onSubmit">
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
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      fetch("http://localhost:3000/users/me")
        .then(res => {
          console.log(res);
          return res.json();
        })
        .then(data => console.log(data))
        .catch(e => console.log(e));

      // fetch('http://localhost:3000/users/', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: {
      //     email: this.email,
      //     password: this.password
      //   }
      // })
      // .then(res => res.json())
      // .then(data => console.log(data));
    }
  }
};
</script>
