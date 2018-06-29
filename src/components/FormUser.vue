<template>
  <base-form @submit="onSubmit">
    <base-input v-model="username" type="text" max="10" required>Choose a username.</base-input>
    <form-user-dropbox
      :filename="filename"
      :file-src="fileSrc"
      @onFileChange="onFileChange($event)"
    />
    <div class="form-btns mt-md">
      <slot name="form-user-buttons">
        <base-button type="submit" color="primary" fullWidth>Save</base-button>
      </slot>
    </div>
  </base-form>
</template>

<script>
import FormUserDropbox from "@/components/FormUserDropbox";

export default {
  components: {
    FormUserDropbox
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
      const { username, filename, fileSrc } = this.$store.state.user;
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
</style>
