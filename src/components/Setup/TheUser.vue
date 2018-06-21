<template>
  <div class="user">
    <form class="form">
      <div class="form__control">
        <label class="form__label">When did you quit smoking?</label>
        <datetime type="datetime" :week-start="1" v-model="quitDate"></datetime>
      </div>
      <div class="form__control">
        <label class="form__label">When did you quit smoking?</label>
        <div v-if="!imgSrc" class="dropbox">
          <input
            type="file"
            @change="onFileChange($event.target.files[0])"
            accept="image/*"
            class="input-file"
          >
          <p>
            Drag your file(s) here to begin<br> or click to browse
          </p>
        </div>
        <div class="image-container">
          <img @load="imgLoaded" class="image" :src="imgSrc" alt="">
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: ""
    };
  },
  methods: {
    onFileChange(file) {
      var reader = new FileReader();

      reader.onload = e => {
        this.imgSrc = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    imgLoaded() {
      console.log(this.imgSrc);
      try {
        localStorage.setItem("elephant", this.imgSrc);
      } catch (e) {
        console.log("Storage failed: " + e);
      }
    }
  }
};
</script>

<style lang="scss">
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
  height: 200px;
  position: absolute;
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

.image-container {
  outline: 2px dashed grey; /* the dash box */
  outline-offset: -10px;
  background: lightcyan;
  color: dimgray;
  padding: 10px 10px;
  height: 200px; /* minimum height */
  position: relative;
  cursor: pointer;
}

.image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.form {
  display: grid;
  grid-gap: 1rem;

  &__control {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  &__label {
    background-color: $color-font;
    color: #fff;
    font-size: 1.4rem;
    padding: 0.5rem;
  }

  &__input {
    text-align: inherit;
    padding: 0.5rem;
    font-size: 1.6rem;
    font-weight: 600;
    color: $color-primary;
    border: none;
    outline: none;
  }
}
</style>
