<template>
  <base-input>
    Upload a profile image. (optional)
    <div slot="control" v-if="!fileSrc" class="dropbox">
      <input type="file" @change="onFileChange($event.target.files[0])" accept="image/*" class="input-file">
      <p>
        Drag your file here<br> or click to browse
      </p>
    </div>
    <div slot="control" v-else class="dropbox-full">
      <div class="dropbox-full__image-container">
        <div class="dropbox-full__image">
          <user-image :fileSrc="fileSrc" :rotation="rotation" />
        </div>
      </div>
      <div class="dropbox-full__image-details">
        <rotate-left @click.native="$emit('update:rotation', rotation + 90)" class="icon" />
        <base-button>
          <span>Change Image</span>
          <input type="file" @change="onFileChange($event.target.files[0])" accept="image/*" class="input-file">
        </base-button>
        <rotate-right @click.native="$emit('update:rotation', rotation - 90)" class="icon" />
      </div>
    </div>
  </base-input>
</template>

<script>
import RotateLeft from "@/assets/svg/rotate-cw.svg";
import RotateRight from "@/assets/svg/rotate-ccw.svg";
import UserImage from "@/components/UserImage";

export default {
  props: ["filename", "fileSrc", "rotation"],
  components: {
    RotateRight,
    RotateLeft,
    UserImage
  },
  data() {
    return {
      msg: "Drag your file here\n or click to begin"
    };
  },
  computed: {
    imageRotationStyle() {
      return {
        transform: `rotate(${this.rotation}deg)`
      };
    }
  },
  methods: {
    onFileChange(file) {
      const reader = new FileReader();

      reader.onload = async e => {
        const img = await this.compress(e.target.result, 10);
        this.$emit("onFileChange", {
          filename: file.name,
          fileSrc: img
        });
      };
      reader.readAsDataURL(file);
    },
    async compress(dataUrl, newWidth) {
      const image = new Image();
      image.src = dataUrl;

      await image.onload;
      const oldWidth = image.width;
      const oldHeight = image.height;
      const newHeight = Math.floor((oldHeight / oldWidth) * newWidth);

      const canvas = document.createElement("canvas");
      canvas.width = newWidth;
      canvas.height = newHeight;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0, newWidth, newHeight);
      return canvas.toDataURL();
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
    width: 30rem;
    margin: 0 auto;
    flex: 1 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 2rem;
  }

  &__image {
    display: block;
    max-width: 95%;
    width: 30rem;
    height: 30rem;
    margin: 2rem;
  }
}

.icon {
  height: 3rem;
  width: 3rem;
  cursor: pointer;
}
</style>
