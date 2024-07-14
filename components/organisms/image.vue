<template>
  <img :class="$options._componentTag" class="component organism"/>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: () => {
        return {
          name: '1',
          format: 'png'
        }
      },
      require: false
    },
  },
  methods: {},
  watch: {},
  data() {
    return {}
  },
  mounted() {
    this.$el.src = require(`~/assets/datas/images/${ this.$props.options.name }`);
    this.$store.commit('addRessource', 'ok');
    this.$el.onload = () => {
      this.$store.commit('removeRessource', this.$el);
    }
  }
}
</script>

<style lang="css">
.o-image {
  width: 100%;
  height: auto;
}
</style>
