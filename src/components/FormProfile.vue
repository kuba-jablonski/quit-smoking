<template>
  <div>
    <p class="title mb-md text-center uppercase">Profile</p>
    <base-form @submit="onSubmit">
      <base-input v-model="username" type="text" minlength="3" maxlength="10" required>Choose a username.</base-input>
      <form-profile-dropbox
        :filename="filename"
        :file-src="fileSrc"
        @onFileChange="onFileChange($event)"
      />
      <div class="form-btns mt-md">
        <slot name="form-user-buttons">
          <base-button type="submit" color="primary" class="form-btn">Save</base-button>
        </slot>
      </div>
    </base-form>
  </div>
</template>

<script>
import FormProfileDropbox from "@/components/FormProfileDropbox";

export default {
  components: {
    FormProfileDropbox
  },
  data() {
    return {
      username: "",
      filename: "",
      fileSrc: ""
    };
  },
  methods: {
    onFileChange(event) {
      this.filename = event.filename;
      this.fileSrc = event.fileSrc;
    },
    onSubmit() {
      this.$emit("onSubmitUser", {
        username: this.username,
        filename: this.filename,
        fileSrc: this.fileSrc
      });
    },
    populateFormFields() {
      const { username, filename, fileSrc } = this.$store.state.profile;
      this.username = username;
      this.filename = filename;
      this.fileSrc = fileSrc;
    }
  },
  mounted() {
    this.populateFormFields();
  }
};
</script>

<style lang="scss" scoped>
.form-btns {
  display: flex;
}

.form-btn {
  margin: 0 auto;
}
</style>
