<template>
  <main>
    <a-settingButton />
    <button @click="stopVoice">Pause</button>
    <button @click="playVoice">Play</button>
    <div class="storyJ">
      <div class="box a">a</div>
      <div class="box b">b</div>
      <div class="box c">c</div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      audio: null,
    };
  },
  beforeMount() {
    this.$store.commit("initializeSound");
    this.temoignage = new Audio(require("~/assets/sounds/poule.wav"));
  },
  mounted() {
    this.temoignage.play();
    this.$gsap.to(".b", {
      scrollTrigger: {
        trigger: ".b",
        start: "20px 80%",
        end: "bottom 100px",
        toggleActions: "restart pause reverse pause",
        onEnter: () => {
          this.chien = new Audio(require("~/assets/sounds/chien.wav"));
          this.chien.play();
        },
      },
      x: 100,
      rotation: 360,
      duration: 3,
    });
  },

  methods: {
    stopVoice() {
      this.$store.commit("toggleSound");
      this.temoignage.pause();
    },
    playVoice() {
      this.$store.commit("toggleSound");
      this.temoignage.play();
      this.temoignage.currentTime = 0;
    },
  },
  computed: {
    isSoundEnabled() {
      return this.$store.state.isSoundEnabled;
    },
  },
};
</script>

<style lang="scss">
.storyJ {
  height: 3000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.box {
  width: 50px;
  height: 50px;
  text-align: center;
}

.a {
  background: red;
}

.b {
  background: blue;
}

.c {
  background: green;
}
</style>
