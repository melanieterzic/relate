<template>
  <main>
    <nuxt-link to="/rd-figma">
      <span class="play">PLAY</span>
    </nuxt-link>
    <t-home :api="api" />
  </main>
</template>

<script>
export default {
  async asyncData({ app, $api }) {
    return await $api.get(app.context.route.name);
  },
  mounted() {
    this.$el.querySelector(".play").addEventListener("touchstart", () => {
      console.log("ok");
    });
  },
};
</script>

<style lang="scss">
.play {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}

@font-face {
  font-family: "Source Sans Pro";
  src: url("/fonts/Source/SourceSansPro-Regular.eot");
  src: url("/fonts/Source/SourceSansPro-Regular.eot?#iefix")
      format("embedded-opentype"),
    url("/fonts/Source/SourceSansPro-Regular.woff2") format("woff2"),
    url("/fonts/Source/SourceSansPro-Regular.woff") format("woff"),
    url("/fonts/Source/SourceSansPro-Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}
</style>
