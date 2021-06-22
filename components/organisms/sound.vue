<template>
  <div :class="$options._componentTag" class="component organism">
    <slot />
    <div class="line"></div>
    <p v-if="$props.options.sound.type == 'sound-context' || $props.options.sound.type == 'sound-testimony'" class="subtitles"></p>
  </div>
</template>

<script>
import testimony from "~/assets/datas/Jane-sub.json";
import context from "~/assets/datas/contexte-sub.json";

export default {
  props: {
    options: {
      type: Object,
      default: () => {},
      require: true,
    },
  },
  data() {
    return {
      sound: {
        audio: null,
        index: null,
        src: null,
        playing: false,
        interaction: false,
      },
      subtitles: {
        fr: null,
      },
    };
  },
  mounted() {
    setTimeout(() => {
      if (
        this.$props.options.sound.type == "sound-context" ||
        this.$props.options.sound.type == "sound-testimony"
      ) {
        this.$el.querySelector('.line').classList.add('active');
      }
      this.$nuxt.$on("update", this.update);
      this.$data.sound.src = require(`~/assets/sounds/${
        this.$route.name === "index" ? "chapter-1" : this.$route.name
      }/${this.$props.options.sound.name}.mp3`).default;
      // this.$data.sound.src = require(`~/assets/sounds/${this.$props.options.sound.name}.mp3`).default;
      if (this.$route.name == "context-1") {
        this.$data.subtitles.fr = context.fr;
      } else {
        this.$data.subtitles.fr = testimony.fr;
      }
      this.$data.sound.index = this.$props.options.sound.index;
      window.addEventListener("click", this.onFirstInteractionUser);
      window.addEventListener("touchstart", this.onFirstInteractionUser);
      this.$parent.$data.responseChild = true;
    }, 1000);
  },
  beforeDestroy() {
    this.$data.sound.playing = false;
  },
  methods: {
    play() {
      if (this.$data.sound.audio) {
        if (this.isSoundEnabled) {
          this.sound.audio.play();
        }
        if (this.isSubtitlesEnabled) {
          if (
            this.$props.options.sound.type == "sound-context" ||
            this.$props.options.sound.type == "sound-testimony"
          ) {
            this.$el.querySelector(".subtitles").style.display = "flex";
          }
        }
      }
    },
    pause() {
      if (this.$data.sound.audio) {
        this.sound.audio.pause();
          if (
            this.$props.options.sound.type == "sound-context" ||
            this.$props.options.sound.type == "sound-testimony"
          ) {
            this.$el.querySelector(".subtitles").style.display = "none";
          }
      }
    },
    stop() {
      if (this.$data.sound.audio) {
        this.sound.audio.pause();
        this.sound.audio.currentTime = 0;
          if (
            this.$props.options.sound.type == "sound-context" ||
            this.$props.options.sound.type == "sound-testimony"
          ) {
            this.$el.querySelector(".subtitles").style.display = "none";
          }
      }
    },
    setPlaying(value) {
      this.$data.sound.playing = value;
    },
    onFirstInteractionUser() {
      this.$store.state.interaction = true;
      this.$data.sound.audio = new Audio(this.$data.sound.src);
      window.removeEventListener("click", this.onFirstInteractionUser);
      window.removeEventListener("touchstart", this.onFirstInteractionUser);
    },
    update() {
      if (
        this.$props.options.sound.type == "sound-context" ||
        this.$props.options.sound.type == "sound-testimony"
      ) {
        if (this.$data.sound.playing === false) {
          this.$el.querySelector(".subtitles").style.display = "none";
        }
        if (this.$data.sound.audio) {
          this.$data.currentSoundTime = this.$data.sound.audio.currentTime;
          const sousTitre = this.$data.subtitles.fr[
            this.$props.options.sound.index - 1
          ];
          if (sousTitre) {
            for (let i = 0; i < sousTitre.length; i++) {
              let phrase = sousTitre[i];
              if (
                phrase.start <= this.$data.currentSoundTime &&
                phrase.end > this.$data.currentSoundTime
              ) {
                this.$el.querySelector(".subtitles").innerHTML = "<span>" + phrase.text + "</span>";
              }
            }
          }
        }
      }
    },
  },
  watch: {
    "$store.state.isSoundEnabled": function () {
      if (this.$data.sound.playing) {
        this.stop();
      }
    },
    "$data.sound.playing": function () {
      if (this.$store.state.interaction) {
        if (this.$data.sound.playing) {
          this.play();
        } else {
          this.stop();
        }
      }
    },
  },
  computed: {
    isSoundEnabled() {
      return this.$store.state.isSoundEnabled;
    },
    isSubtitlesEnabled() {
      return this.$store.state.isSubtitlesEnabled;
    },
  }
};
</script>

<style lang="scss">
.o-sound {
  display: table-cell;
}
.line.active {
  display: block;
  width: 100%;
  height: 100%;
  background: #909090;
  opacity: 25%;
}
.subtitles {
  background: rgba(15, 14, 33, 85%);
  box-shadow: 0px 12.5px 15px rgb(0 0 0 / 25%);
  display: none;
  min-height: 80px;
  width: 100%;
  color: #faf2ed;
  font-family: "Source Sans Pro";
  text-align: center;
  line-height: 20px;
  font-size: 16px;
  padding: 10px 65px;
  font-weight: 400;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  span {}
}
</style>
