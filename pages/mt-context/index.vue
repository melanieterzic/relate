<template>
  <main class="context">
    <div class="header">
      <button v-bind:class="changeStyle()" @click="modal = !modal">
        <img :src="[modal ? close : burger]" />
      </button>
      <o-settings v-if="modal"></o-settings>
      <img class="img-cross" src="~/assets/images/cross.svg" alt="cross" />
      <img
        class="img-arrow"
        src="~/assets/images/white_arrow.svg"
        alt="cross"
      />
      <p class="contexte-info">
        Check if the settings are right for you. <br />
        You can change them anytime
      </p>
    </div>
    <div class="body">
      <div class="titles">
        <h1>Cambodge</h1>
        <h2>ប្រទេសកម្ពុជា</h2>
      </div>
      <div class="carte">
        <img class="img-carte" src="~/assets/images/carte.svg" alt="carte" />
      </div>
      <a-contextesvg></a-contextesvg>
      <o-scroller class="sound1">
        <o-sound
          :data-sound-index="datas.name === 'sound-testimony' && soundIndex"
          :options="{ sound: { name: '~/assets/sounds/1.mp3' } }"
        >
        </o-sound>
      </o-scroller>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      modal: false,
      burger: require("~/assets/images/settings.svg"),
      close: require("~/assets/images/white_close.svg"),
    };
  },
  mounted() {
    this.$nuxt.$on("update", this.update);
  },
  methods: {
    changeStyle() {
      if (this.$data.modal) {
        return "img-settings-close";
      }
      if (!this.$data.modal) {
        return "img-settings";
      }
    },
    update() {
      if (this.$data.modal) {
        document.querySelector("html").style.overflow = "hidden";
      }
      if (!this.$data.modal) {
        document.querySelector("html").style.overflow = "auto";
      }
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Bayon&family=Source+Sans+Pro:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Volkhov:wght@700&display=swap");

html {
  overflow-y: scroll;
  overflow-x: hidden;
  max-width: 100%;
  margin: 0;
  padding: 0;
}
.context {
  background-color: #0f0e21;
  color: #faf2ed;
  font-family: "Source Sans Pro";
  .header {
    .img-settings {
      position: fixed;
      right: -8px;
      z-index: 10;
      margin-top: 34px;
      text-decoration: none;
      border: none;
      background: none;
      //z-index: 3;
    }
    .img-settings-close {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 10;
      text-decoration: none;
      border: none;
      background: none;
    }
    .img-cross {
      position: absolute;
      right: 0;
      margin-right: 50px;
      margin-top: 30px;
    }
    .img-arrow {
      position: absolute;
      right: 0;
      margin-top: 30%;
      margin-right: 10%;
    }
    .contexte-info {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      font-weight: 400;
      font-size: 14px;
      line-height: 17.6px;
      height: 200px;
    }
  }

  .body {
    .titles {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 300px;
      h1 {
        font-weight: 700;
        font-size: 36px;
        line-height: 45.25px;
      }
      h2 {
        font-family: "Bayon";
        font-size: 24px;
        font-weight: 400px;
      }
    }
    .carte {
      display: flex;
      justify-content: center;
      .img-carte {
        max-width: 80%;
      }
    }
  }
}
</style>
