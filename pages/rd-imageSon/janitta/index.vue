<template>
  <main class="imageSon">
    <p>click avant de scroller :)</p>
    <o-scroller
      v-for="index in images.length" :key="`image-${index}`"
      class="scroller"
      :style="getContainerStyleImage(index)"
      :options="{ scroll: { end: 'bottom 15%' } }"
    >
      <img
        :src="getImageSrc(index)" alt=""
      >
    </o-scroller>
    <o-scroller
      v-for="index in sounds.length" :key="`sound-${index}`"
      class="scroller"
      :style="getContainerStyleSound(index)"
      :options="{ scroll: { end: 'bottom 15%' } }"
    >
      <o-sound
        :options="{ sound: { name: index } }"
      ></o-sound>
    </o-scroller>
  </main>
</template>

<script>

export default {
  data() {
    return {
      default: {
        width: 300,
      },
      images: [
        {
          top: 1110.8,
          left: 0,
          width: 360,
          height: 578
        },
        {
          top: 1347.75,
          left: -45,
          width: 325.87,
          height: 524.92
        },
        {
          top: 1722.14,
          left: 0,
          width: 300,
          height: 570
        },
        {
          top: 2312,
          left: 0,
          width: 300,
          height: 625
        },
        {
          top: 2859,
          left: 0,
          width: 300,
          height: 585.28
        }
      ],
      sounds: [
        {
          top: 1190,
          left: 0,
          width: 300,
          height: 299
        },
        {
          top: 1976,
          left: 0,
          width: 300,
          height: 299
        },
        {
          top: 2487,
          left: 0,
          width: 300,
          height: 299
        },
        {
          top: 2868,
          left: 0,
          width: 300,
          height: 299
        }
      ]
    }
  },
  methods: {
    getImageSrc(index) {
      return require(`~/assets/images/janitta/${index}.png`);
    },
    getImageAlt(index) {
      return `Image ${index}`;
    },
    // getSoundIndex(index) {
    //   if (index !== 3 && index !== 5) {
    //     if (index > 3 && index < 5) {
    //       return index - 1;
    //     } else if (index > 5) {
    //       return index - 2;
    //     } else {
    //       return index;
    //     }
    //   } else {
    //     return '';
    //   }
    // },
    getContainerStyleImage(index) {
      index = index -  1;
      return `
        position: absolute;
        top: ${this.convertPxToVw(this.$data.images[index].top)}vw;
        left: ${this.convertPxToVw(this.$data.images[index].left)}vw;
        width: ${this.convertPxToVw(this.$data.images[index].width)}vw;
        height: ${this.convertPxToVw(this.$data.images[index].height)}vw;
      `;
    },
    getContainerStyleSound(index) {
      index = index -  1;
      return `
        position: absolute;
        top: ${this.convertPxToVw(this.$data.sounds[index].top)}vw;
        left: ${this.convertPxToVw(this.$data.sounds[index].left)}vw;
        width: ${this.convertPxToVw(this.$data.sounds[index].width)}vw;
        height: ${this.convertPxToVw(this.$data.sounds[index].height)}vw;
      `;
    },
    convertPxToVw(value) {
      return value * 100 / this.$data.default.width;
    }
  }
}
</script>

<style lang="css">
.imageSon img {
  width: 100%;
  height: auto;
}
.imageSon .o-sound {
  display: block;
  width: 100%;
  height: 100%;
  border: solid blue 1px;
}
</style>
