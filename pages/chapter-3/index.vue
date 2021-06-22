<template>
  <t-story :story="getStory(1)"/>
</template>

<script>
import content from '~/assets/datas/content.json';
export default {
  methods: {
    getStory(index) {
      const stories = [];
      content.children.forEach(child => {
        if (child.name === "story") {
          stories.push(child);
        }
      });
      return stories[index];
    }
  },
  mounted() {
  },
  beforeDestroy() {
    this.$store.commit('setLoader', true);
    this.$store.commit('resetIndexSoundTestimony');
    this.$store.commit('resetIndexSoundAmbient');
    this.$store.commit('resetIndexSoundNoise');
  }
};
</script>

<style lang="scss">
</style>
