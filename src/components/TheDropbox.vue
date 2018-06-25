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
        Drag your file<br> or click to browse
      </p>
    </div>
    <div slot="control" v-else class="dropbox-full">
      <div class="image-container">
        <img class="image" :src="fileSrc" alt="">
      </div>
      <div class="image-details">
        <p class="c-primary bold mb-md">{{ fileName }}</p>
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
import BaseInput from "@/components/Base/BaseInput";
import BaseButton from "@/components/Base/BaseButton";

export default {
  components: {
    BaseInput,
    BaseButton
  },
  data() {
    return {
      fileName: "",
      fileSrc: "",
      msg: "Drag your file here\n or click to begin"
    };
  },
  methods: {
    onFileChange(file) {
      var reader = new FileReader();

      reader.onload = e => {
        this.fileSrc = e.target.result;
        this.fileName = file.name;

        this.$emit("onFileChange", {
          fileName: this.fileName,
          fileSrc: this.fileSrc
        });
      };
      reader.readAsDataURL(file);
    }
  }
};
</script>

<style lang="scss" scoped>
.dropbox {
  outline: 2px dashed grey; /* the dash box */
  outline-offset: -10px;
  background: #fff;
  // color: dimgray;
  padding: 10px 10px;
  min-height: 200px; /* minimum height */
  position: relative;
  cursor: pointer;
}

.input-file {
  opacity: 0; /* invisible but it's there! */
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
}

.dropbox:hover {
  background: lightblue; /* when mouse over to the drop zone, change color */
}

.dropbox p {
  font-size: 1.2em;
  text-align: center;
  padding: 50px 0;
}

.dropbox-full {
  // outline: 2px dashed grey; /* the dash box */
  // outline-offset: -10px;
  // background: lightcyan;
  // color: dimgray;
  // padding: 10px 10px;
  // height: 200px; /* minimum height */
  // position: relative;
  // cursor: pointer;
  background: #fff;
  display: flex;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
}

.image-container {
  flex: 1 1;
  display: flex;
  justify-content: center;
}

.image {
  display: block;
  width: 30rem;
  height: 30rem;
  object-fit: cover;
  margin: 2rem;
  outline: 2px dashed grey; /* the dash box */
  // outline-offset: 10px;
}

.image-details {
  flex: 1 1;
  // width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
}
</style>
