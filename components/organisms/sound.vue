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
      this.$data.sound.audio = new Audio(this.$data.sound.src); 
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
    this.$data.sound.src = require(`~/assets/sounds/${this.$props.options.sound.name}.mp3`).default;
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
