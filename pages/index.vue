<template>
  <main>
  <nuxt-link to="/rd-integrationprototype">
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
    this.$el.querySelector('.play').addEventListener('touchstart', ()=>{
      console.log('ok');
    })
  }
};
</script>

<style lang="scss">
  .play {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
</style>
