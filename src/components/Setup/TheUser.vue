<template>
  <div class="user" @submit.prevent="onSubmit">
    <base-form>
      <base-input v-model="username" type="text" max="10">Choose a username.</base-input>
      <the-dropbox @onFileChange="onFileChange($event)"/>
      <div class="form-btns mt-md">
        <base-button class="mr-auto">Back</base-button>
        <base-button class="mr-md">Skip</base-button>
        <base-button type="submit" color="primary">Save</base-button>
      </div>
    </base-form>
  </div>
</template>

<script>
import BaseForm from "@/components/Base/BaseForm";
import BaseInput from "@/components/Base/BaseInput";
import BaseButton from "@/components/Base/BaseButton";
import TheDropbox from "@/components/TheDropbox";

export default {
  components: {
    BaseForm,
    BaseInput,
    BaseButton,
    TheDropbox
  },
  data() {
    return {
      username: "",
      fileName: "",
      fileSrc: ""
    };
  },
  methods: {
    onFileChange(event) {
      this.fileName = event.fileName;
      this.fileSrc = event.fileSrc;
    },
    onSubmit() {
      this.$emit("onSubmitUser", {
        username: this.username,
        fileName: this.fileName,
        fileSrc: this.fileSrc
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.form-btns {
  display: flex;
}
</style>
