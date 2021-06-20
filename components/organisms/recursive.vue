<template>
  <!-- Story -->
  <main
    v-if="datas.tag === 'main'"
    :style="`
            position: relative;
            width: ${bounding.width.percent}vw;
            height: ${bounding.height.percent}vw;
            ${
              datas.backgroundColor &&
              `background-color: rgb(${datas.backgroundColor.r}, ${datas.backgroundColor.g}, ${datas.backgroundColor.b});`
            }
            background-image: url('${require('~/assets/images/background-noise.png')}');
        `"
  >
    <o-recursive
      :datas="data"
      v-for="(data, index) in datas.children"
      :key="index"
    />
  </main>
  <!-- Chapter -->
  <section
    v-else-if="datas.tag === 'section'"
    :style="`
            width: ${bounding.width.percent}vw;
            height: ${bounding.height.percent}vw;            
            ${
              datas.backgroundColor &&
              `background-color: rgb(${datas.backgroundColor.r}, ${datas.backgroundColor.g}, ${datas.backgroundColor.b});`
            }
        `"
  >
    <o-recursive
      :datas="data"
      v-for="(data, index) in datas.children"
      :key="index"
    />
  </section>
  <!-- ??? -->
  <div
    v-else-if="datas.tag === 'div'"
    :class="datas.name"
    class="container"
    :style="`
            position: absolute;
            top: ${bounding.y.percent}vw;
            left: ${bounding.x.percent}vw;
            width: ${bounding.width.percent}vw;
            height: ${bounding.height.percent}vw;
            ${
              datas.backgroundColor &&
              `background-color: rgb(${datas.backgroundColor.r}, ${datas.backgroundColor.g}, ${datas.backgroundColor.b});`
            }
            ${
              datas.rotation &&
              `transform: rotate3D(0, 0, 1, ${datas.rotation}deg);`
            }
        `"
  >
    <o-recursive
      :datas="data"
      v-for="(data, index) in datas.children"
      :key="index"
    />
  </div>
  <!-- ACTION OVERLAY -->
  <div
    v-else-if="datas.tag === 'overlay'"
    :class="datas.name"
    class="container"
    v-on:click="okok"
    :style="`
            position: absolute;
            top: ${bounding.y.percent}vw;
            left: ${bounding.x.percent}vw;
            width: ${bounding.width.percent}vw;
            height: ${bounding.height.percent}vw;
            ${
              datas.backgroundColor &&
              `background-color: rgb(${datas.backgroundColor.r}, ${datas.backgroundColor.g}, ${datas.backgroundColor.b});`
            }
        `"
  >
    <o-recursive
      :datas="data"
      v-for="(data, index) in datas.children"
      :key="index"
    />
  </div>
  <!-- ACTION MODAL -->
  <div
    v-else-if="datas.tag === 'modal'"
    :class="datas.name"
    class="container"
    :style="`
            position: absolute;
            top: 0vw;
            left: 0vw;
            width: ${bounding.width.percent}vw;
            height: ${bounding.height.percent}vw;
            ${
              datas.backgroundColor &&
              `background-color: rgb(${datas.backgroundColor.r}, ${datas.backgroundColor.g}, ${datas.backgroundColor.b});`
            }
        `"
  >
    <o-recursive
      :datas="data"
      v-for="(data, index) in datas.children"
      :key="index"
    />
  </div>
  <!-- ACTION LINK -->
  <nuxt-link v-else-if="datas.tag === 'link'" :to="datas.to">
    <o-recursive
      :datas="data"
      v-for="(data, index) in datas.children"
      :key="index"
    />
  </nuxt-link>
  <!-- HEADLINE -->
  <h2
    v-else-if="datas.tag === 'h2'"
    :style="`
            position: absolute;
            top: ${bounding.y.percent}vw;
            left: ${bounding.x.percent}vw;
            width: ${bounding.width.percent}vw;
            height: ${bounding.height.percent}vw;
            color: rgb(${datas.color.r}, ${datas.color.g}, ${datas.color.b});
            font-size: ${fontSize}vw;
            font-family: ${datas.fontFamily};
            font-weight: ${datas.fontWeight};
            letter-spacing: ${letterSpacing}vw;
            line-height: ${lineHeight}vw;
            text-align: ${datas.textAlign};
            opacity: ${datas.opacity};
        `"
  >
    {{ datas.characters }}
  </h2>
  <!-- PARAGRAPH -->
  <p
    v-else-if="datas.tag === 'p'"
    :style="`
            position: absolute;
            top: ${bounding.y.percent}vw;
            left: ${bounding.x.percent}vw;
            width: ${bounding.width.percent}vw;
            height: ${bounding.height.percent}vw;
            color: rgb(${datas.color.r}, ${datas.color.g}, ${datas.color.b});
            font-size: ${fontSize}vw;
            font-family: ${datas.fontFamily};
            font-weight: ${datas.fontWeight};
            letter-spacing: ${letterSpacing}vw;
            line-height: ${lineHeight}vw;
            text-align: ${datas.textAlign};
            opacity: ${datas.opacity};
        `"
  >
    {{ datas.characters }}
  </p>
  <!-- IMAGE -->
  <img
    v-else-if="datas.tag === 'img' || datas.tag === 'svg'"
    :src="getUrlImg(datas.fileName)"
    :style="`
            position: absolute;
            top: ${bounding.y.percent}vw;
            left: ${bounding.x.percent}vw;
            width: ${bounding.width.percent}vw;
            height: ${bounding.height.percent}vw;
        `"
  />
  <!-- ANIMATION -->
  <o-animation
    v-else-if="datas.tag === 'animation' && datas.type === 'fix'"
    :class="datas.name"
    class="container"
    :style="`
        position: absolute;
        top: ${bounding.y.percent}vw;
        left: ${bounding.x.percent}vw;
        width: ${bounding.width.percent}vw;
        height: ${bounding.height.percent}vw;
        ${
          datas.backgroundColor &&
          `background-color: rgb(${datas.backgroundColor.r}, ${datas.backgroundColor.g}, ${datas.backgroundColor.b});`
        }
    `"
    :options="{
      name: datas.fileName,
      number: datas.children.length - 1,
      speed: 1000 / (datas.children.length - 1),
    }"
  >
    <o-recursive
      :datas="data"
      v-for="(data, index) in datas.children"
      :key="index"
    />
  </o-animation>
  <o-scroller
    v-else-if="datas.tag === 'animation' && datas.type === 'scroll'"
    :class="datas.name"
    class="container"
    :style="`
        position: absolute;
        top: ${bounding.y.percent}vw;
        left: ${bounding.x.percent}vw;
        width: ${bounding.width.percent}vw;
        height: ${bounding.height.percent}vw;
        ${
          datas.backgroundColor &&
          `background-color: rgb(${datas.backgroundColor.r}, ${datas.backgroundColor.g}, ${datas.backgroundColor.b});`
        }
    `"
  >
    <o-animation
      :style="`
            width: ${bounding.width.percent}vw;
            height: ${bounding.height.percent}vw;
        `"
      :options="{
        name: datas.fileName,
        number: datas.children.length - 1,
        scroll: true,
      }"
    >
      <o-recursive
        :datas="data"
        v-for="(data, index) in datas.children"
        :key="index"
      />
    </o-animation>
  </o-scroller>
  <!-- SOUND -->
  <o-scroller
    v-else-if="datas.tag === 'sound'"
    :class="datas.name"
    class="container"
    :style="`
            position: absolute;
            top: ${bounding.y.percent}vw;
            left: ${bounding.x.percent}vw;
            width: ${bounding.width.percent}vw;
            height: ${bounding.height.percent}vw;
            ${
              datas.backgroundColor &&
              `background-color: rgb(${datas.backgroundColor.r}, ${datas.backgroundColor.g}, ${datas.backgroundColor.b});`
            }
        `"
  >
    <o-sound
      :data-sound-index="datas.name === 'sound-testimony' && soundIndex"
      :options="{ sound: { name: soundName } }"
    >
    </o-sound>
  </o-scroller>
  <!-- PARALLAX -->
  <o-scroller
    v-else-if="datas.tag === 'scroller'"
    :class="datas.name"
    class="container"
    :style="`
        position: absolute;
        top: ${bounding.y.percent}vw;
        left: ${bounding.x.percent}vw;
        width: ${bounding.width.percent}vw;
        height: ${bounding.height.percent}vw;
        ${
          datas.backgroundColor &&
          `background-color: rgb(${datas.backgroundColor.r}, ${datas.backgroundColor.g}, ${datas.backgroundColor.b});`
        }
    `"
    :options="{
      effect: 'parallax',
      direction: datas.gap ? (datas.gap.y > 0 ? 1 : -1) : -1,
      gap: datas.gap ? Math.abs(datas.gap.y) : 100,
    }"
  >
    <o-recursive
      :datas="data"
      v-for="(data, index) in datas.children"
      :key="index"
    />
  </o-scroller>
</template>

<script>
export default {
  head() {
    const fontFamily = this.$props.datas.fontFamily;
    if (fontFamily) {
      return {
        link: [
          {
            rel: "stylesheet",
            href: `https://fonts.googleapis.com/css2?family=${fontFamily.replace(
              / /g,
              "+"
            )}`,
          },
        ],
      };
    } else {
      return {};
    }
  },
  props: {
    datas: { required: true },
  },
  data() {
    return {
      isActive: false,
      defaultWidth: 375,
      defaultHeight: 2160,
      url: undefined,
      soundIndex: undefined,
      soundName: undefined,
      fontSize: undefined,
      letterSpacing: undefined,
      lineHeight: undefined,
      bounding: {
        width: {
          ratio: undefined,
          pixel: undefined,
          percent: undefined,
        },
        height: {
          ratio: undefined,
          pixel: undefined,
          percent: undefined,
        },
        x: {
          ratio: undefined,
          pixel: undefined,
          percent: undefined,
        },
        y: {
          ratio: undefined,
          pixel: undefined,
          percent: undefined,
        },
      },
    };
  },
  methods: {
    setSoundName(type) {
      let name = undefined;
      let index = undefined;
      const split = type.split("-");
      switch (type) {
        case "sound-testimony":
          index = this.$store.state.recursive.index.sound.testimony;
          name = `${split[1]}-${index}`;
          this.$store.commit("addIndexSoundTestimony");
          break;
        case "sound-ambient":
          index = this.$store.state.recursive.index.sound.ambient;
          name = `${split[1]}-${index}`;
          this.$store.commit("addIndexSoundAmbient");
          break;
        case "sound-noise":
          index = this.$store.state.recursive.index.sound.noise;
          name = `${split[1]}-${index}`;
          this.$store.commit("addIndexSoundNoise");
          break;
      }
      this.$data.soundIndex = index;
      this.$data.soundName = name;
    },
    okok() {
      this.$data.isActive = true;
    },
    getUrlImg(fileName) {
      return require(`~/assets/datas/images/${fileName}`);
    },
    setUrlImg() {
      let bytes = this.$props.datas.bytes;
      const format = this.$props.datas.format;
      bytes = Uint8Array.from(Object.values(bytes));
      if (format === "svg") {
        this.$data.url = URL.createObjectURL(
          new Blob([bytes.buffer], { type: `image/svg+xml` })
        );
      } else {
        this.$data.url = URL.createObjectURL(
          new Blob([bytes.buffer], { type: `image/${format}` })
        );
      }
    },
    setFontSize() {
      this.$data.fontSize =
        this.getPercentResizeValue(this.$props.datas.fontSize) - 1;
    },
    setLetterSpacing() {
      const value = this.$props.datas.letterSpacing;
      if (value.includes("%")) {
        let rebalancing = (12.666 * parseInt(value.split("%")[0])) / 100;
        this.$data.letterSpacing = rebalancing;
      } else if (value.includes("px")) {
        let rebalancing = parseInt(value.split("px")[0]);
        this.$data.letterSpacing = this.getPercentResizeValue(rebalancing);
      }
    },
    setLineHeight() {
      const value = this.$props.datas.lineHeight;
      if (value.includes("%")) {
        let rebalancing = (35.9375 * parseInt(value.split("%")[0])) / 100;
        this.$data.lineHeight = rebalancing;
      } else if (value.includes("px")) {
        let rebalancing = parseInt(value.split("px")[0]) + 40;
        this.$data.lineHeight = this.getPercentResizeValue(rebalancing);
      }
    },
    getPixelResizeValue(value) {
      let low1 = 0;
      let high1 = this.$data.defaultWidth;
      let low2 = 0;
      let high2 = window.innerWidth;
      return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
    },
    getRatioResizeValue(oldValue, newValue) {
      return newValue / oldValue;
    },
    getPercentResizeValue(value) {
      return (value * 100) / this.$data.defaultWidth;
    },
    setBounding() {
      let width = this.$props.datas.width;
      let height = this.$props.datas.height;
      let x = this.$props.datas.position.x;
      let y = this.$props.datas.position.y;
      this.bounding.width.pixel = this.getPixelResizeValue(width);
      this.bounding.width.ratio = this.getRatioResizeValue(
        width,
        this.bounding.width.pixel
      );
      this.bounding.width.percent = this.getPercentResizeValue(width);
      this.bounding.height.pixel = this.getPixelResizeValue(height);
      this.bounding.height.ratio = this.getRatioResizeValue(
        height,
        this.bounding.height.pixel
      );
      this.bounding.height.percent = this.getPercentResizeValue(height);
      this.bounding.x.pixel = this.getPixelResizeValue(x);
      this.bounding.x.ratio = this.getRatioResizeValue(
        x,
        this.bounding.x.pixel
      );
      this.bounding.x.percent = this.getPercentResizeValue(x);
      this.bounding.y.pixel = this.getPixelResizeValue(y);
      this.bounding.y.ratio = this.getRatioResizeValue(
        y,
        this.bounding.y.pixel
      );
      this.bounding.y.percent = this.getPercentResizeValue(y);
    },
  },
  mounted() {
    if (this.$props.datas.tag === "link") {
      console.log(this.$props.datas);
    }
    this.setBounding();
    // if (this.$props.datas.tag === 'img' || this.$props.datas.tag === 'svg') {
    //     this.setUrlImg();
    // }
    if (this.$props.datas.tag === "sound") {
      this.setSoundName(this.$props.datas.name);
    }
    if (this.$props.datas.tag === "h2" || this.$props.datas.tag === "p") {
      this.setFontSize();
      this.setLetterSpacing();
      this.setLineHeight();
    }
  },
};
</script>

<style lang="scss">
.container {
  & > * {
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
  }
}
</style>
