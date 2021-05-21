<template>
  <main class="story">
    <section class="chapter">
      <div
        v-for="index in 8" :key="index"
        class="container" :class="getContainerClass(index)"
        :style="getContainerStyle(index)"
        :data-sound-index="getSoundIndex(index)"
      >
        <img 
          :src="getImageSrc(index)" :alt="getImageAlt(index)"
        >
      </div>
      <nuxt-link 
        to="/"
        class="link"
      ></nuxt-link>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      default: {
        width: 300
      },
      images: [
        {
          top: 52.59,
          left: 109.67,
          width: 162.63,
          height: 193.55
        },
        {
          top: 322.93,
          left: 105.12,
          width: 67.09,
          height: 101.29
        },
        {
          top: 522.01,
          left: 138.66,
          width: 110.63,
          height: 110.18
        },
        {
          top: 547.36,
          left: 0,
          width: 300,
          height: 1126.43
        },
        {
          top: 1069.36,
          left: 0,
          width: 300,
          height: 585.28
        },
        {
          top: 1763.77,
          left: 25.07,
          width: 249.86,
          height: 223.22
        },
        {
          top: 2090.66,
          left: 0,
          width: 300,
          height: 833.68
        },
        {
          top: 2323.15,
          left: 192.74,
          width: 75.55,
          height: 103.17
        }
      ]
    }
  },
  methods: {
    getImageSrc(index) {
      return require(`~/assets/images/${index}.png`);
    },
    getImageAlt(index) {
      return `Image ${index}`;
    },
    getContainerClass(index) {
      if (index !== 3 && index !== 5) {
        if (index > 3 && index < 5) {
          return `sound sound-${index - 1}`;
        } else if (index > 5) {
          return `sound sound-${index - 2}`;
        } else {
          return `sound sound-${index}`;
        }
      } else {
        return '';
      }
    },
    getSoundIndex(index) {
      if (index !== 3 && index !== 5) {
        if (index > 3 && index < 5) {
          return index - 1;
        } else if (index > 5) {
          return index - 2;
        } else {
          return index;
        }
      } else {
        return '';
      }
    },
    getContainerStyle(index) {
      index = index - 1;
      return `
        top: ${this.convertPxToVw(this.$data.images[index].top)}vw;
        left: ${this.convertPxToVw(this.$data.images[index].left)}vw;
        width: ${this.convertPxToVw(this.$data.images[index].width)}vw;
        height: ${this.convertPxToVw(this.$data.images[index].height)}vw;
      `;
    },
    convertPxToVw(value) {
      return value * 100 / this.$data.default.width;
    },
    initializeTrigger() {
      const sounds = this.$el.querySelectorAll('.sound');
      sounds.forEach(sound => {
        const el = sound;
        const indexSound = sound.dataset.soundIndex;
        const soundSrc = require(`~/assets/sounds/${indexSound}.wav`).default;
        const soundAudio = new Audio(soundSrc);
        this.$gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            start: "20px 80%",
            end: "bottom 100px",
            toggleActions: "restart pause reverse pause",
            onEnter: () => {
              soundAudio.play();
            },
          },
          rotation: 360,
          duration: 3,
        });
      });
    }
  },  
  mounted() {
    this.initializeTrigger();
  }
}
</script>

<style lang="scss">
.story {
  position: relative;
  width: 100vw;
  height: auto;
  .chapter {
    width: 100vw;
    height: auto;
  }
  .container {
    position: absolute;
    img {
      width: 100%;
      height: auto;
    }
  }
  .link {
    position: absolute;
    top: 282.453vw;
    left: 18vw;
    display: block;
    width: 10vw;
    height: 10vw;
    background-color: #9b55ff;
    border-radius: 100%;
    &:before, &:after {
      position: absolute;
      top: 50%;
      left: 50%;
      content: ' ';
      height: 5vw;
      width: 0.5vw;
      background-color: #FFF;
      transform: translate3d(-50%, -50%, 0);
    }
    &:after {
      transform: translate3d(-50%, -50%, 0) rotate(90deg);
    }
  }
}
</style>
