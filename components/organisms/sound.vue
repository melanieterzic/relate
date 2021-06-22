<template>
  <div :class="$options._componentTag" class="component organism">
    <slot />
    <p class="subtitles"></p>
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
    this.$nuxt.$on("update", this.update);
    this.$data.sound.src = require(`~/assets/sounds/${this.$props.options.sound.name}.mp3`).default;
    if (this.$route.name == "mt-context") {
      this.$data.subtitles.fr = context.fr;
    } else {
      this.$data.subtitles.fr = testimony.fr;
    }
    this.$data.sound.index = this.$props.options.sound.index;
    window.addEventListener("click", this.onFirstInteractionUser);
    window.addEventListener("touchstart", this.onFirstInteractionUser);
  },
  methods: {
    play() {
      if (this.isSoundEnabled) {
        this.sound.audio.play();
      }
      if (this.isSubtitlesEnabled) {
        this.$el.querySelector(".subtitles").style.display = "block";
      }
    },
    pause() {
      this.sound.audio.pause();
      this.$el.querySelector(".subtitles").style.display = "none";
    },
    stop() {
      this.sound.audio.pause();
      this.sound.audio.currentTime = 0;
      this.$el.querySelector(".subtitles").style.display = "none";
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
        if (this.$data.sound.audio) {
          this.$data.currentSoundTime = this.$data.sound.audio.currentTime;
          const sousTitre = this.$data.subtitles.fr[
            this.$props.options.sound.index - 1
          ];
          for (let i = 0; i < sousTitre.length; i++) {
            let phrase = sousTitre[i];
            if (
              phrase.start <= this.$data.currentSoundTime &&
              phrase.end > this.$data.currentSoundTime
            ) {
              this.$el.querySelector(".subtitles").innerHTML = phrase.text;
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
  },
};
</script>

<style lang="scss">
.o-sound {
  display: table-cell;
}
.subtitles {
  background: #0f0e21;
  display: none;
  height: 70px;
  width: 100%;
  color: #faf2ed;
  font-family: "Source Sans Pro";
  text-align: center;
  line-height: 20px;
  font-size: 16px;
  padding: 10px 70px;
  font-weight: 400;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
