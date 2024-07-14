<template>
  <canvas :class="$options._componentTag" class="component organism"></canvas>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: () => {
        return {
          name: 'fluid',
          number: 826,
          // speed: 100,
          scroll: true
        }
      },
      require: false
    },
  },
  methods: {
    loop() {
      setInterval(() => {
        if (this.$data.count + 1 < this.$props.options.number) {
          this.$data.count++;
        } else {
          this.$data.count = 0;
        }
      }, this.$props.options.speed);
    },
    scroll(progress) {
      this.$data.count = Math.floor(progress * (this.$props.options.number - 1) / 100);
      // console.log(progress, this.$data.count)
    }
  },
  watch: {
    "$data.count": function() {
      this.$data.context.clearRect(0, 0, this.$data.canvas.width, this.$data.canvas.height);
      this.$data.context.drawImage(this.$data.images[this.$data.count], 0, 0, this.$data.canvas.width, this.$data.canvas.height);
    }
  },
  data() {
    return {
      images: [],
      canvas: null,
      context: null,
      timer: null,
      count: 0
    }
  },
  created() {

  },
  mounted() {
      this.$el.style.width = this.$props.options.width + 'vw';
      this.$el.style.height = this.$props.options.height + 'vw';
      this.$data.canvas = this.$el;
      this.$data.context = this.$data.canvas.getContext("2d");
      for (let i = 0; i < this.$props.options.number; i++) {
        const image = new Image();
        image.src = require(`~/assets/datas/images/${ this.$props.options.name }-${ i + 1 }.png`)
        this.$store.commit('addRessource', 'ok');
        if (i === 0) {
          image.onload = () => {
            this.$data.canvas.width = this.$el.offsetWidth * 2;
            this.$data.canvas.height = this.$el.offsetHeight * 2;
            this.$data.context.drawImage(image, 0, 0, this.$data.canvas.width, this.$data.canvas.height);
            if (!this.$props.options.scroll) {
              this.loop();
            } else {
              this.$parent.$data.responseChild = true;
            }
            this.$store.commit('removeRessource', this.$el);
          }
        } else {
          image.onload = () => {
            this.$store.commit('removeRessource', this.$el);
          }
        }
        this.$data.images.push(image);
      }
  }
}
</script>

<style lang="css">
.o-animation {
}
</style>
