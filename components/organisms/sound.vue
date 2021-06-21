<template>
  <div :class="$options._componentTag" class="component organism">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: () => {},
      require: true
    },
  },
  methods: {
    play() {
      this.sound.audio.play();
    },
    pause() {
      this.sound.audio.pause();
    },
    stop() {
      this.sound.audio.pause();
      this.sound.audio.currentTime = 0;
    },
    setPlaying(value) {
      this.$data.sound.playing = value;
    },
    onFirstInteractionUser() {
      this.$store.state.interaction = true;
      window.removeEventListener('click', this.onFirstInteractionUser);
      window.removeEventListener('touchstart', this.onFirstInteractionUser);
    },
  },
  watch: {
    '$data.sound.playing' : function() {
      if (this.$store.state.interaction) {
        if (this.$data.sound.playing) {
          this.play();
        } else {
          this.stop();
        }
      }
    }
  },
  data() {
    return {
      sound: {
        audio: null,
        src: null,
        playing: false,
        interaction: false
      }
    }
  },
  mounted() {    
    console.log(this.$route.name)
    this.$data.sound.src = require(`~/assets/sounds/${this.$route.name === "index" ? "chapter-1" : this.$route.name}/${this.$props.options.sound.name}.mp3`).default;
    this.$data.sound.audio = new Audio(this.$data.sound.src); 
    this.$store.commit('addRessource', 'ok');
    this.$data.sound.audio.addEventListener('canplaythrough', () => {
      this.$store.commit('removeRessource', this.$el);
    });
    if (this.$props.options.sound.loop) {
      this.$data.sound.audio.addEventListener('ended', function () {
        this.$data.sound.audio.currentTime = 0;
        this.$data.sound.audio.play();
      }, false);
    }
    window.addEventListener('click', this.onFirstInteractionUser);
    window.addEventListener('touchstart', this.onFirstInteractionUser);
  }
}
</script>

<style lang="scss">
.o-sound {
  display: table-cell;
}
</style>
