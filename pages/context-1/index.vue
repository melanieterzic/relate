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
      <img
        class="sound-marker"
        src="~/assets/images/icon-sound-white.svg"
        alt="Icon marker sound"
      />
      <a-contextesvg></a-contextesvg>
      <o-scroller class="sound1">
        <o-sound
          :options="{
            sound: { name: '1', index: '1', type: 'sound-context' },
          }"
        >
        </o-sound>
      </o-scroller>
      <o-scroller class="sound2">
        <o-sound
          :options="{
            sound: { name: '2', index: '2', type: 'sound-context' },
          }"
        >
        </o-sound>
      </o-scroller>
      <o-scroller class="sound3">
        <o-sound
          :options="{
            sound: { name: '3', index: '3', type: 'sound-context' },
          }"
        >
        </o-sound>
      </o-scroller>
      <o-scroller class="sound4">
        <o-sound
          :options="{
            sound: { name: '4', index: '4', type: 'sound-context' },
          }"
        >
        </o-sound>
      </o-scroller>
      <o-scroller class="sound5">
        <o-sound
          :options="{
            sound: { name: '5', index: '5', type: 'sound-context' },
          }"
        >
        </o-sound>
      </o-scroller>
      <o-scroller class="sound6">
        <o-sound
          :options="{
            sound: { name: '6', index: '6', type: 'sound-context' },
          }"
        >
        </o-sound>
      </o-scroller>
      <o-scroller class="sound7">
        <o-sound
          :options="{
            sound: { name: '7', index: '7', type: 'sound-context' },
          }"
        >
        </o-sound>
      </o-scroller>
      <o-scroller class="sound8">
        <o-sound
          :options="{
            sound: { name: '8', index: '8', type: 'sound-context' },
          }"
        >
        </o-sound>
      </o-scroller>
      <o-scroller class="sound9">
        <o-sound
          :options="{
            sound: { name: '9', index: '9', type: 'sound-context' },
          }"
        >
        </o-sound>
      </o-scroller>
      <o-scroller class="sound10">
        <o-sound
          :options="{
            sound: { name: '10', index: '10', type: 'sound-context' },
          }"
        >
        </o-sound>
      </o-scroller>
      <o-scroller class="sound11">
        <o-sound
          :options="{
            sound: { name: '11', index: '11', type: 'sound-context' },
          }"
        >
        </o-sound>
      </o-scroller>
      <o-scroller class="sound12">
        <o-sound
          :options="{
            sound: { name: '12', index: '12', type: 'sound-context' },
          }"
        >
        </o-sound>
      </o-scroller>
      <o-scroller class="sound13">
        <o-sound
          :options="{
            sound: { name: '13', index: '13', type: 'sound-context' },
          }"
        >
        </o-sound>
      </o-scroller>
      <o-scroller class="sound14">
        <o-sound
          :options="{
            sound: { name: '14', index: '14', type: 'sound-context' },
          }"
        >
        </o-sound>
      </o-scroller>
      <o-scroller class="sound15">
        <o-sound
          :options="{
            sound: { name: '15', index: '15', type: 'sound-context' },
          }"
        >
        </o-sound>
      </o-scroller>
      <o-scroller class="sound16">
        <o-sound
          :options="{
            sound: { name: '16', index: '16', type: 'sound-context' },
          }"
        >
        </o-sound>
      </o-scroller>
      <o-scroller class="sound17">
        <o-sound
          :options="{
            sound: { name: '17', index: '17', type: 'sound-context' },
          }"
        >
        </o-sound>
      </o-scroller>
      <o-scroller class="sound18">
        <o-sound
          :options="{
            sound: { name: '18', index: '18', type: 'sound-context' },
          }"
        >
        </o-sound>
      </o-scroller>
      <o-scroller class="sound19">
        <o-sound
          :options="{
            sound: { name: '19', index: '19', type: 'sound-context' },
          }"
        >
        </o-sound>
      </o-scroller>
      <o-scroller class="sound20">
        <o-sound
          :options="{
            sound: { name: '20', index: '20', type: 'sound-context' },
          }"
        >
        </o-sound>
      </o-scroller>
      <o-scroller class="sound21">
        <o-sound
          :options="{
            sound: { name: '21', index: '21', type: 'sound-context' },
          }"
        >
        </o-sound>
      </o-scroller>
      <o-scroller class="sound22">
        <o-sound
          :options="{
            sound: { name: '22', index: '22', type: 'sound-context' },
          }"
        >
        </o-sound>
      </o-scroller>
    </div>
  </main>
</template>

<script>
import subtitles from "~/assets/datas/contexte-sub.json";
export default {
  data() {
    return {
      fr: subtitles.fr,
      currentSoundTime: 0,
      currentIndexSound: 0,
      modal: false,
      burger: require("~/assets/images/settings.svg"),
      close: require("~/assets/images/white_close.svg"),
    };
  },
  mounted() {
    this.$store.commit('setLoader', false);
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
  //overflow-y: scroll;
  overflow-x: hidden;
  max-width: 100%;
  margin: 0;
  padding: 0;
}
.context {
  background-color: #0f0e21;
  color: #faf2ed;
  font-family: "Source Sans Pro";
  height: 13000px;
  .sound1 {
    position: absolute;
    top: 600px;
    left: 10px;
    height: 280px;
    width: 2px;
    background-color: #faf2ed;
  }
  .sound2 {
    position: absolute;
    top: 940px;
    left: 10px;
    height: 650px;
    width: 2px;
    background-color: #faf2ed;
  }
  .sound3 {
    position: absolute;
    top: 1650px;
    left: 10px;
    height: 120px;
    width: 2px;
    background-color: #faf2ed;
  }
  .sound4 {
    position: absolute;
    top: 1840px;
    left: 10px;
    height: 580px;
    width: 2px;
    background-color: #faf2ed;
  }
  .sound5 {
    position: absolute;
    top: 2530px;
    left: 10px;
    height: 265px;
    width: 2px;
    background-color: #faf2ed;
  }
  .sound6 {
    position: absolute;
    top: 2850px;
    left: 10px;
    height: 300px;
    width: 2px;
    background-color: #faf2ed;
  }
  .sound7 {
    position: absolute;
    top: 3230px;
    left: 10px;
    height: 300px;
    width: 2px;
    background-color: #faf2ed;
  }
  .sound8 {
    position: absolute;
    top: 3710px;
    left: 10px;
    height: 480px;
    width: 2px;
    background-color: #faf2ed;
  }
  .sound9 {
    position: absolute;
    top: 4580px;
    left: 10px;
    height: 680px;
    width: 2px;
    background-color: #faf2ed;
  }
  .sound10 {
    position: absolute;
    top: 5650px;
    left: 10px;
    height: 230px;
    width: 2px;
    background-color: #faf2ed;
  }
  .sound11 {
    position: absolute;
    top: 6750px;
    left: 10px;
    height: 200px;
    width: 2px;
    background-color: #faf2ed;
  }
  .sound12 {
    position: absolute;
    top: 7280px;
    left: 10px;
    height: 180px;
    width: 2px;
    background-color: #faf2ed;
  }
  .sound13 {
    position: absolute;
    top: 7830px;
    left: 10px;
    height: 890px;
    width: 2px;
    background-color: #faf2ed;
  }
  .sound14 {
    position: absolute;
    top: 8780px;
    left: 10px;
    height: 200px;
    width: 2px;
    background-color: #faf2ed;
  }
  .sound15 {
    position: absolute;
    top: 9480px;
    left: 10px;
    height: 350px;
    width: 2px;
    background-color: #faf2ed;
  }
  .sound16 {
    position: absolute;
    top: 10080px;
    left: 10px;
    height: 145px;
    width: 2px;
    background-color: #faf2ed;
  }
  .sound17 {
    position: absolute;
    top: 10280px;
    left: 10px;
    height: 150px;
    width: 2px;
    background-color: #faf2ed;
  }
  .sound18 {
    position: absolute;
    top: 10480px;
    left: 10px;
    height: 150px;
    width: 2px;
    background-color: #faf2ed;
  }
  .sound19 {
    position: absolute;
    top: 10780px;
    left: 10px;
    height: 550px;
    width: 2px;
    background-color: #faf2ed;
  }
  .sound20 {
    position: absolute;
    top: 11380px;
    left: 10px;
    height: 100px;
    width: 2px;
    background-color: #faf2ed;
  }
  .sound21 {
    position: absolute;
    top: 11780px;
    left: 10px;
    height: 160px;
    width: 2px;
    background-color: #faf2ed;
  }

  .sound22 {
    position: absolute;
    top: 12230px;
    left: 10px;
    height: 480px;
    width: 2px;
    background-color: #faf2ed;
  }
  .sound-marker {
    position: fixed;
    top: 85%;
    left: 0;
    transform: translate3d(0, -50%, 0);
    z-index: 9;
  }

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
      z-index: 13;
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
