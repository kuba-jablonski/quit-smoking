<template>
  <base-input>
    Upload a profile image.
    <div slot="control" v-if="!fileSrc" class="dropbox">
      <input
        type="file"
        @change="onFileChange($event.target.files[0])"
        accept="image/*"
        class="input-file"
      >
      <p>
        Drag your file here<br> or click to browse
      </p>
    </div>
    <div slot="control" v-else class="dropbox-full">
      <div class="dropbox-full__image-container">
        <img class="dropbox-full__image" :src="fileSrc" alt="">
      </div>
      <div class="dropbox-full__image-details">
        <p class="c-primary bold mb-md">{{ filename }}</p>
        <base-button>
          <span>Change Image</span>
          <input
            type="file"
            @change="onFileChange($event.target.files[0])"
            accept="image/*"
            class="input-file"
          >
        </base-button>
      </div>
    </div>
  </base-input>
</template>

<script>
export default {
  props: ["filename", "fileSrc"],
  data() {
    return {
      msg: "Drag your file here\n or click to begin"
    };
  },
  methods: {
    onFileChange(file) {
      const reader = new FileReader();

      reader.onload = e => {
        this.$emit("onFileChange", {
          filename: file.name,
          fileSrc: e.target.result
        });
      };
      reader.readAsDataURL(file);
    }
  }
};
</script>

<style lang="scss" scoped>
.dropbox {
  outline: 2px dashed grey;
  outline-offset: -1rem;
  background: #fff;
  padding: 1rem;
  min-height: 20rem;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.input-file {
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
}

.dropbox-full {
  background: #fff;
  display: flex;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }

  &__image-container {
    flex: 1 1;
    display: flex;
    justify-content: center;
  }

  &__image-details {
    flex: 1 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 2rem;
  }

  &__image {
    display: block;
    width: 30rem;
    height: 30rem;
    object-fit: cover;
    margin: 2rem;
    outline: 2px dashed grey;
  }
}
</style>